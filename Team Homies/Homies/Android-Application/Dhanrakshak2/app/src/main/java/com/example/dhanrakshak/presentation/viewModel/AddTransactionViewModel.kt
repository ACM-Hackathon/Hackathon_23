package com.example.dhanrakshak.presentation.viewModel
import androidx.lifecycle.ViewModel
import com.example.dhanrakshak.data.model.entities.Transaction
import com.example.dhanrakshak.use_case.AddTransaction
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject
import androidx.lifecycle.viewModelScope
import com.example.dhanrakshak.data.model.entities.InvalidTransactionException
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.asSharedFlow
import kotlinx.coroutines.launch

@HiltViewModel
class AddTransactionViewModel @Inject constructor(
    private val addTransactionUseCases: AddTransaction
): ViewModel(){
    private val _eventFlow = MutableSharedFlow<UiEvent>()
    val eventFlow = _eventFlow.asSharedFlow()

    fun addTransaction(transaction: Transaction){
        viewModelScope.launch {
            try {
                addTransactionUseCases.invoke(
                    transaction
                )
                _eventFlow.emit(UiEvent.SaveTransaction)
            } catch (e: InvalidTransactionException){
                _eventFlow.emit(
                    UiEvent.ShowSnackBar(
                        message = e.message ?: "Couldn't save not"
                    )
                )
            }
        }
    }

    sealed class UiEvent{
        data class ShowSnackBar(val message: String): UiEvent()
        object SaveTransaction: UiEvent()
    }
}