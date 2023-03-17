package com.example.dhanrakshak.data.model.entities

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "Transactions")
data class Transaction(
    @PrimaryKey
    val transactionId: String,
    val senderId: String,
    val receiverId: String,
    val senderName: String,
    val amount: Long,
    val timeStamp: Long,
)

class InvalidTransactionException(message: String): Exception(message)