package com.example.dhanrakshak.use_case

data class TransactionUseCases(
    val getTransaction: GetTransaction,
    val getTransactions: GetTransactions,
    val addTransaction: AddTransaction,
    val deleteTransaction: DeleteTransaction
)