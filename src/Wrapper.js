import { useContext } from 'react'
import { Alert } from './components/alert/Alert'
import { AlertContext } from './contexts/alert/alertContext'

export const Wrapper = ({ children }) => {
    const alert = useContext(AlertContext)
    
    return (
        <>
            {alert.alert.isVisible && <Alert/>}
            {children}
        </>
    )
}