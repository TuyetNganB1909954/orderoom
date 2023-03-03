import React, { createContext } from 'react'
import RoomAPI from './api/RoomAPI'
import CustomAPI from './api/CustomAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const state = {
        RoomAPI: RoomAPI(),
        CustomAPI: CustomAPI()
    }
    return (
        <GlobalState.Provider value ={state}>
            {children}
        </GlobalState.Provider>
    )
} 
