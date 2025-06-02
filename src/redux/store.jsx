import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import React from 'react'

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default store