package com.example.dhanrakshak.presentation.viewModel

import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.dhanrakshak.data.model.entities.Transaction
import com.example.dhanrakshak.use_case.AddTransaction
import com.example.dhanrakshak.use_case.TransactionUseCases
import dagger.hilt.android.lifecycle.HiltViewModel
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import kotlinx.coroutines.launch
import javax.inject.Inject

@HiltViewModel
class TransactionsViewModel @Inject constructor(
    private val transactionUseCases: TransactionUseCases
): ViewModel() {

    private val _state = mutableStateOf(TransactionsState())
    val state: State<TransactionsState> = _state

    private var getNotesJob: Job? = null

    init {
        getTransactions()
    }

    fun onEvent(event: TransactionsEvent){
        when(event){
            is TransactionsEvent.GetTransactions ->{
                getTransactions()
            }
            is TransactionsEvent.DeleteTransaction -> {
                viewModelScope.launch{
                    transactionUseCases.deleteTransaction(event.transaction)
                }
            }
        }
    }

    private fun getTransactions(){
        getNotesJob?.cancel()
        getNotesJob = transactionUseCases.getTransactions().onEach { transactions->
            _state.value = state.value.copy(
                transactionsList = transactions
            )
        }.launchIn(viewModelScope)
    }

}

sealed class TransactionsEvent{
    object GetTransactions: TransactionsEvent()
    data class DeleteTransaction(val transaction: Transaction): TransactionsEvent()
}

data class TransactionsState(
    val transactionsList : List<Transaction> = emptyList()
)


