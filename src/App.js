import { BrowserRouter } from 'react-router-dom'
import { useAuth } from './hooks/useAuth.hook'
import { useRoutes } from './routes'
import { AuthContext } from './contexts/authContext'
import { AlertState } from './contexts/alert/alertState'

function App() {
  const { userId, token, login, logout } = useAuth()
  const isAuthenticated = !!token

  const routes = useRoutes(isAuthenticated)

  return (
    <AuthContext.Provider
      value={{
        userId,
        token,
        login,
        logout,
      }}
    >
      <div className='container'>
        <BrowserRouter>
          <AlertState>{routes}</AlertState>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  )
}

export default App
