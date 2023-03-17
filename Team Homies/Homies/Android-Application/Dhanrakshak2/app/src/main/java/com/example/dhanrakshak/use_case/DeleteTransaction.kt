package com.example.dhanrakshak.use_case

import com.example.dhanrakshak.data.model.entities.Transaction
import com.example.dhanrakshak.data.model.repository.TransactionsRepository
import javax.inject.Inject

class DeleteTransaction @Inject constructor(private val repository: TransactionsRepository) {
    suspend operator fun invoke(transaction: Transaction){
        repository.deleteTransaction(transaction)
    }
}