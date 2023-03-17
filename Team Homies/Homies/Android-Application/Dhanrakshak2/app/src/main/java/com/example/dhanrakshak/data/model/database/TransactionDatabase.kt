package com.example.dhanrakshak.data.model.database

import androidx.room.Database
import androidx.room.RoomDatabase
import com.example.dhanrakshak.data.model.dao.TransactionDao
import com.example.dhanrakshak.data.model.entities.Transaction

@Database(entities = [Transaction::class], version = 1)
abstract class TransactionDatabase: RoomDatabase() {
    abstract val transactionDao: TransactionDao
    companion object{
        const val DATABASE_NAME = "transaction_db"
    }
}