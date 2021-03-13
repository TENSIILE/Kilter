import { useReducer, useCallback } from 'react'
import { AlertContext } from './alertContext'
import { AlertReducer } from '../../redux/reducers/AlertReducer'
import {
  alertActionHide,
  alertActionShow,
} from '../../redux/actions/Alert.action'

export const AlertState = ({ children }) => {
  const [alert, dispatch] = useReducer(AlertReducer, {
    isVisible: false,
    header: '',
    text: '',
    type: '',
  })

  const hide = useCallback(() => {
    dispatch(alertActionHide())
  }, [])

  const show = useCallback((header, text, type) => {
    dispatch(
      alertActionShow({
        header,
        text,
        type,
      })
    )
  }, [])

  return (
    <AlertContext.Provider
      value={{
        hide,
        show,
        alert,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}
