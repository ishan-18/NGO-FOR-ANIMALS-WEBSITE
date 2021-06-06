import React, {createContext, useState} from 'react'
import AdoptProductsAPI from './api/AdoptProductsAPI'

export const GlobalState = createContext()

export const DataProvider = ({children})=>{

    AdoptProductsAPI()

    return (
        <GlobalState.Provider value={"Value"}>
            {children}
        </GlobalState.Provider>
    )
}


