package com.example.dhanrakshak.data.bluetooth

import com.example.dhanrakshak.data.model.entities.Transaction

fun String.toTransaction(): Transaction {
    val arr = split("#")
    return Transaction(arr[0], arr[1], arr[2], arr[3], arr[4].toLong(), arr[5].toLong())
}

fun Transaction.toByteArray(): ByteArray {
    return ("${transactionId}#${senderId}#" +
            "${receiverId}#${senderId}#${senderName}#${amount}#${timeStamp}").encodeToByteArray()
}