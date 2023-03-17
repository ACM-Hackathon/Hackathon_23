package com.example.dhanrakshak.presentation

import com.example.dhanrakshak.data.model.entities.Transaction
import com.example.dhanrakshak.domain.bluetooth.BluetoothDevice


data class BluetoothUiState(
    val scannedDevices: List<BluetoothDevice> = emptyList(),
    val pairedDevices: List<BluetoothDevice> = emptyList(),
    val isConnected: Boolean = false,
    val isConnecting: Boolean = false,
    val errorMessage: String? = null,
    val transactions: List<Transaction> = emptyList()
)
