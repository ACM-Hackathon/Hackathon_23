package com.plcoding.bluetoothchat.data.chat

import com.plcoding.bluetoothchat.domain.chat.Transaction

fun String.toBluetoothMessage(isFromLocalUser: Boolean): Transaction {
    val arr = split("#")

    return Transaction(
        senderId=arr[0],
        receiverId="",
        senderName=arr[1],
        amount = arr[2],
        isFromLocalUser = isFromLocalUser
    )
}

fun Transaction.toByteArray(): ByteArray {
    return "${senderId}#$senderName#$amount".encodeToByteArray()
}