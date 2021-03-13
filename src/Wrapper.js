import { useContext, Suspense, lazy } from 'react'
import { Alert } from './components/alert/Alert'
import { AlertContext } from './contexts/alert/alertContext'

export const Wrapper = ({ children }) => {
  const alert = useContext(AlertContext)
  const Sidebar = lazy(() => import('./pages/Main/layers/sidebar/Sidebar'))

  return (
    <>
      {alert.alert.isVisible && <Alert />}
      <Suspense fallback={null}>
        <Sidebar />
      </Suspense>
      {children}
    </>
  )
}
