package com.example.dhanrakshak.use_case

import com.example.dhanrakshak.data.model.entities.Transaction
import com.example.dhanrakshak.data.model.repository.TransactionsRepository
import kotlinx.coroutines.flow.Flow
import javax.inject.Inject

class GetTransactions @Inject constructor(private val repository: TransactionsRepository) {
    operator fun invoke(): Flow<List<Transaction>> {
        return repository.getTransactions()
    }
}