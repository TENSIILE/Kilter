import { createContext } from 'react'

export const AlertContext = createContext({
  alert: {
    isVisible: false,
    header: '',
    text: '',
    type: '',
  },
  hide: () => {},
  show: (header, text, type) => {},
})
