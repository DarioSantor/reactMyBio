import React, { createContext } from 'react'
import { author } from './resources'

export const AppContext = createContext()

const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider
            value={author}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;