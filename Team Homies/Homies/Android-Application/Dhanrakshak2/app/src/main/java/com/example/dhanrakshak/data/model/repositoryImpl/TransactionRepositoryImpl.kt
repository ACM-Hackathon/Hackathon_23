package com.example.dhanrakshak.data.model.repositoryImpl

import com.example.dhanrakshak.data.model.dao.TransactionDao
import com.example.dhanrakshak.data.model.entities.Transaction
import com.example.dhanrakshak.data.model.repository.TransactionsRepository
import kotlinx.coroutines.flow.Flow

class TransactionRepositoryImpl(private val dao: TransactionDao)
    : TransactionsRepository {
    override fun getTransactions(): Flow<List<Transaction>> {
        return dao.getTransactions()
    }

    override suspend fun getTransactionById(id: String): Transaction? {
        return dao.getTransactionById(id = id)
    }

    override suspend fun insertTransaction(transaction: Transaction) {
        dao.insertTransaction(transaction = transaction)
    }

    override suspend fun deleteTransaction(transaction: Transaction) {
        dao.deleteTransaction(transaction = transaction)
    }

}