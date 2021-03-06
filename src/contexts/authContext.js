import React from 'react'

export const AuthContext = React.createContext({
  userId: null,
  token: null,
  login: (userId, token) => {},
  logout: () => {},
})
