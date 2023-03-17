package com.example.dhanrakshak.use_case

import com.example.dhanrakshak.data.model.entities.Transaction
import com.example.dhanrakshak.data.model.repository.TransactionsRepository
import kotlinx.coroutines.flow.Flow
import javax.inject.Inject

class GetTransaction @Inject constructor (private val repository: TransactionsRepository) {
    suspend operator fun invoke(id: String): Transaction? {
        return repository.getTransactionById(id)
    }
}