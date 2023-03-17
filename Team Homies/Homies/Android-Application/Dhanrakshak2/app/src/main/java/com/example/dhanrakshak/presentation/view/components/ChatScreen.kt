@file:OptIn(ExperimentalComposeUiApi::class)

package com.example.dhanrakshak.presentation.view.components

import android.widget.Toast
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
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
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalSoftwareKeyboardController
import androidx.compose.ui.unit.dp
import com.example.dhanrakshak.presentation.BluetoothUiState
import java.util.Random


@Composable
fun ChatScreen(
    state: BluetoothUiState,
    onDisconnect: () -> Unit,
    onSendMessage: (Long) -> Unit
) {
    val amount = rememberSaveable {
        mutableStateOf(0L)
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
                text = "Messages",
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
            items(state.transactions) { transaction ->
                Column(
                    modifier = Modifier.fillMaxWidth()
                ) {
                    val arr = arrayOf(true, false)
                    val isFromLocalUser = arr[Random().nextInt(2)]
                    ChatMessage(
                        transaction = transaction,
                        modifier = Modifier
                            .align(
                                if(isFromLocalUser) Alignment.End else Alignment.Start
                            ),
                        isFromLocalUser
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
                value = if(amount.value==0L) "" else amount.value.toString(),
                onValueChange = {
                    try {
                        amount.value = it.toLong()
                    } catch (e: NumberFormatException){
                        amount.value = 0L
                    }
                },
                modifier = Modifier.weight(1f),
                placeholder = {
                    Text(text = "Enter Amount Here")
                }
            )
            IconButton(onClick = {
                onSendMessage(amount.value)
                amount.value = 0L
                keyboardController?.hide()
            }) {
                Icon(
                    imageVector = Icons.Default.Send,
                    contentDescription = "Send"
                )
            }
        }
    }
}