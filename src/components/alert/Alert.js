import { useContext } from 'react'
import ReactDOM from 'react-dom'
import { Alert as AlertAntd } from 'antd'
import { AlertContext } from '../../contexts/alert/alertContext'

export const Alert = () => {
    const alert = useContext(AlertContext)

    return (
        ReactDOM.createPortal(
            <AlertAntd
                type={alert.alert.type}
                message={alert.alert.header}
                description={alert.alert.text}
                afterClose={alert.hide} 
                showIcon
                closable
            />,
            document.querySelector('#root > .container')
        )
    )
}