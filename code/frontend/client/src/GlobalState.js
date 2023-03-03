import React, { createContext } from 'react'
import KindofroomAPI from './api/KindofroomAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const state = {
        KindOfRoomAPI : KindofroomAPI()
    }
    return (
        <GlobalState.Provider value ={state}>
            {children}
        </GlobalState.Provider>
    )
} 
