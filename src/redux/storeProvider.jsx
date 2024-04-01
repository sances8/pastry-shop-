'use client'

import {store} from "./store.js";

import React, {FC} from 'react'
import {Provider} from 'react-redux'

export const StoreProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}