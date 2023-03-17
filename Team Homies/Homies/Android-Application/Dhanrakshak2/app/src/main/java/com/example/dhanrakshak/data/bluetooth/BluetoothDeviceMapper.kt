package com.example.dhanrakshak.data.bluetooth

import android.annotation.SuppressLint
import android.bluetooth.BluetoothDevice
import com.example.dhanrakshak.domain.bluetooth.BluetoothDeviceDomain

@SuppressLint("MissingPermission")
fun BluetoothDevice.toBluetoothDeviceDomain(): BluetoothDeviceDomain {
    return BluetoothDeviceDomain(
        name = name,
        address = address
    )
}