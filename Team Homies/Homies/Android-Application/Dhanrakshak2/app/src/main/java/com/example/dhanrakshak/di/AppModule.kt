package com.example.dhanrakshak.di

import android.app.Application
import android.content.Context
import androidx.room.Room
import com.example.dhanrakshak.data.bluetooth.AndroidBluetoothController
import com.example.dhanrakshak.data.model.database.TransactionDatabase
import com.example.dhanrakshak.data.model.repository.TransactionsRepository
import com.example.dhanrakshak.data.model.repositoryImpl.TransactionRepositoryImpl
import com.example.dhanrakshak.domain.bluetooth.BluetoothController
import com.example.dhanrakshak.use_case.*
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object AppModule {

    @Provides
    @Singleton
    fun provideBluetoothController(@ApplicationContext context: Context): BluetoothController {
        return AndroidBluetoothController(context)
    }

    @Provides
    @Singleton
    fun provideNoteDatabase(app: Application): TransactionDatabase {
        return Room.databaseBuilder(
            app,
            TransactionDatabase::class.java,
            TransactionDatabase.DATABASE_NAME
        ).build()
    }

    @Provides
    @Singleton
    fun provideNoteRepository(db: TransactionDatabase): TransactionsRepository {
        return TransactionRepositoryImpl(db.transactionDao)
    }

    @Provides
    @Singleton
    fun provideNoteUseCases(repository: TransactionsRepository): TransactionUseCases {
        return TransactionUseCases(
            getTransaction = GetTransaction(repository),
            deleteTransaction = DeleteTransaction(repository),
            addTransaction = AddTransaction(repository),
            getTransactions = GetTransactions(repository)
        )
    }
}