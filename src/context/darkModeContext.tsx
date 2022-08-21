import { createContext, useReducer } from 'react';
import darkModeReducer from './darkModeReducer';

export type StateType = typeof initialState

const initialState = {
    darkMode: false
}

export const DarkModeContext = createContext(initialState as StateType & { dispatch: React.Dispatch<{ type: string; payload?: {}; }> })

export const DarkModeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(darkModeReducer, initialState)

    return (
        <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>{children}</DarkModeContext.Provider>
    )
}
