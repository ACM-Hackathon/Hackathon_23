package com.example.dhanrakshak.data.model.dao

import androidx.room.*
import com.example.dhanrakshak.data.model.entities.Transaction
import kotlinx.coroutines.flow.Flow

@Dao
interface TransactionDao {
    @Query(value = "select * from Transactions")
    fun getTransactions(): Flow<List<Transaction>>

    @Query("select * from Transactions where transactionId = :id")
    fun getTransactionById(id: String): Transaction?

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertTransaction(transaction: Transaction)

    @Delete
    suspend fun deleteTransaction(transaction: Transaction)
}