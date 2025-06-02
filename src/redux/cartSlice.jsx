import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        count:0,
        items: []
    }, 
    reducers: {
       
        increment: (state) => {
            state.count += 1
        },
        addItem: (state, action) => {
            state.items.push(action.payload) 
            state.count += 1
        },
        removeItem: (state, action) => {
            const idToRemove = action.payload
            state.items = state.items.filter(item => item.id !== idToRemove )
            state.count = state.items.length
        }, 
        clearCart: (state) => {
            state.items = []
            state.count = 0
        }
        
    }
})

export const {increment, addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer