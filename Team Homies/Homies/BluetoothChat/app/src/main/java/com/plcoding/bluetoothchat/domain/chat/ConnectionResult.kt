package com.plcoding.bluetoothchat.domain.chat

sealed interface ConnectionResult {
    object ConnectionEstablished: ConnectionResult
    data class TransferSucceeded(val message: Transaction): ConnectionResult
    data class Error(val message: String): ConnectionResult
}