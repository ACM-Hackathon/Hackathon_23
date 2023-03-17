package com.example.dhanrakshak.domain.bluetooth

typealias BluetoothDeviceDomain = BluetoothDevice

data class BluetoothDevice(
    val name: String?,
    val address: String
)
