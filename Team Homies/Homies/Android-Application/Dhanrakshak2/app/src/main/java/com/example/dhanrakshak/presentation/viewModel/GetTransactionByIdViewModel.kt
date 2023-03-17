package com.example.dhanrakshak.presentation.viewModel

import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.dhanrakshak.data.model.entities.InvalidTransactionException
import com.example.dhanrakshak.data.model.entities.Transaction
import com.example.dhanrakshak.use_case.GetTransaction
import com.example.dhanrakshak.use_case.GetTransactions
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.asSharedFlow
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class GetTransactionByIdViewModel @Inject constructor(
    private val getTransactionUseCases: GetTransaction,
    savedStateHandle: SavedStateHandle
): ViewModel(){
    private val _state = mutableStateOf<Transaction?>(null)
    val state : State<Transaction?> = _state

    private var transactionId: String? = null

    private val _eventFlow = MutableSharedFlow<UiEvent>()
    val eventFlow = _eventFlow.asSharedFlow()

    init {
        savedStateHandle.get<String>("transactionId")?.let{ tId->
            transactionId = tId
        }
        if(transactionId != null)
            getTransaction(transactionId!!)
    }

    private fun getTransaction(id: String){
        viewModelScope.launch {
            try {
                _state.value = getTransactionUseCases.invoke(id)
                _eventFlow.emit(UiEvent.GetTransactionSuccess)
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
        object GetTransactionSuccess: UiEvent()
    }
}