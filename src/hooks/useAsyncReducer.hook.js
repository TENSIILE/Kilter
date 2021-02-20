import { useState } from "react"

export const useAsyncReducer = (reducer, initialState) => {
    const [state, setState] = useState(initialState)

    const dispatch = async (action) => {
        setState(await reducer(state, action))
    }

    return [state, dispatch]
}