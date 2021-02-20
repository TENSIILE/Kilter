import { createContext } from 'react'

export const StateAuthContext = createContext({
    inputs: {},
    isLoading: false,
    onChangeInputHandler: (e) => {},
    onAsyncLogin: async () => {},
    onAsyncSignUp: async () => {},
})