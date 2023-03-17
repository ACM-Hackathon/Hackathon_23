@file:OptIn(ExperimentalComposeUiApi::class)

package com.plcoding.bluetoothchat.presentation.components

import android.content.Context
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.Text
import androidx.compose.material.TextField
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Send
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalSoftwareKeyboardController
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import com.plcoding.bluetoothchat.data.chat.constants.SharedPrefNames
import com.plcoding.bluetoothchat.domain.chat.Transaction
import com.plcoding.bluetoothchat.presentation.BluetoothUiState

@Composable
fun ChatScreen(
    state: BluetoothUiState,
    onDisconnect: () -> Unit,
    onSendMessage: (Transaction) -> Unit,
    context: Context
) {
    val message = rememberSaveable {
        mutableStateOf("")
    }
    val keyboardController = LocalSoftwareKeyboardController.current

    Column(
        modifier = Modifier
            .fillMaxSize()
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                text = "Transactions",
                modifier = Modifier.weight(1f)
            )
            IconButton(onClick = onDisconnect) {
                Icon(
                    imageVector = Icons.Default.Close,
                    contentDescription = "Disconnect"
                )
            }
        }
        LazyColumn(
            modifier = Modifier
                .fillMaxWidth()
                .weight(1f),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            items(state.messages) { message ->
                Column(
                    modifier = Modifier.fillMaxWidth()
                ) {
                    ChatMessage(
                        message = message,
                        modifier = Modifier
                            .align(
                                if(message.isFromLocalUser) Alignment.End else Alignment.Start
                            )
                    )
                }
            }
        }
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            TextField(
                value = message.value,
                onValueChange = { message.value = it },
                modifier = Modifier.weight(1f),
                placeholder = {
                    Text(text = "Message")
                },
                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number)
            )
            IconButton(onClick = {
                val pref = context.getSharedPreferences(SharedPrefNames.CURRENT_USER_DETAILS, Context.MODE_PRIVATE)
                val senderId = pref.getString(SharedPrefNames.CURRENT_USER_ID, "")
                val senderName = pref.getString(SharedPrefNames.CURRENT_USER_NAME, "")
                val amount = message.value
                val tId = "${senderId}${senderName}${amount}"
                onSendMessage(
                    Transaction(tId, senderId!!, "", senderName!!, amount, isFromLocalUser = true)
                )
                message.value = ""
                keyboardController?.hide()
            }) {
                Icon(
                    imageVector = Icons.Default.Send,
                    contentDescription = "Send message"
                )
            }
        }
    }
}