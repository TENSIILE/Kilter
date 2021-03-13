import { useState, useEffect } from 'react'
import { INIT } from '../redux/types/system.type'

export const useAsyncReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState)

  const dispatch = async action => {
    setState(await reducer(state, action))
  }

  useEffect(() => {
    dispatch({ type: INIT })
  }, [])

  return [state, dispatch]
}
