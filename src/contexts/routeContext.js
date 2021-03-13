import { createContext } from 'react'

export const RouteContext = createContext({
  focus: {},
  setTitle: new_title => {},
  setPass: isPass => {},
})
