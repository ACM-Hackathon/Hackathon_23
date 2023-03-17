package com.plcoding.bluetoothchat.domain.chat

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class Transaction(
    @PrimaryKey
    val tId: String = "",
    val senderId: String = "",
    val receiverId: String = "",
    val senderName: String = "",
    val amount: String,
    val isFromLocalUser: Boolean
)
