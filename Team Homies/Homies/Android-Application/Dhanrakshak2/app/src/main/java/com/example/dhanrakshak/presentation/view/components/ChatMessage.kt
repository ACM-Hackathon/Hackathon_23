package com.example.dhanrakshak.presentation.view.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.dhanrakshak.data.model.entities.Transaction
import com.example.dhanrakshak.ui.theme.OldRose
import com.example.dhanrakshak.ui.theme.Vanilla

@Composable
fun ChatMessage(
    transaction: Transaction,
    modifier: Modifier = Modifier,
    isFromLocalUser: Boolean
) {
    Column(
        modifier = modifier
            .clip(
                RoundedCornerShape(
                    topStart = if (isFromLocalUser) 15.dp else 0.dp,
                    topEnd = 15.dp,
                    bottomStart = 15.dp,
                    bottomEnd = if (isFromLocalUser) 0.dp else 15.dp
                )
            )
            .background(
                if (isFromLocalUser) OldRose else Vanilla
            )
            .padding(16.dp)
    ) {
        Text(
            text = transaction.senderName,
            fontSize = 10.sp,
            color = Color.Black
        )
        Text(
            text = "Rs.${transaction.amount}",
            color = Color.Black,
            modifier = Modifier.widthIn(max = 250.dp)
        )
    }
}
