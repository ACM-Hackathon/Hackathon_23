package com.example.dhanrakshak.data.model.repository

import androidx.room.Delete
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import com.example.dhanrakshak.data.model.entities.Transaction
import kotlinx.coroutines.flow.Flow

interface TransactionsRepository {

    fun getTransactions(): Flow<List<Transaction>>

    suspend fun getTransactionById(id: String): Transaction?

    suspend fun insertTransaction(transaction: Transaction)

    suspend fun deleteTransaction(transaction: Transaction)
}