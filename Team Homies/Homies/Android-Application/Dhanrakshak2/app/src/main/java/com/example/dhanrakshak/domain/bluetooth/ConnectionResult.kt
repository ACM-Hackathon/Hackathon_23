package com.example.dhanrakshak.domain.bluetooth

import com.example.dhanrakshak.data.model.entities.Transaction

sealed interface ConnectionResult {
    object ConnectionEstablished: ConnectionResult
    data class TransferSucceeded(val transaction: Transaction): ConnectionResult
    data class Error(val message: String): ConnectionResult
}