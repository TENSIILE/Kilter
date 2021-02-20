import { useReducer, useContext, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useHttp } from '../../hooks/useHttp.hook'
import { StateAuthContext } from './stateContext'
import { AlertContext } from '../alert/alertContext'
import { AuthContext } from '../../contexts/authContext'
import { AuthInputReducer } from '../../redux/reducers'
import { authInputAction } from '../../redux/actions/AuthInput.action'
import { 
    LOGIN_LOGIN,
    LOGIN_PASSWORD, 
    SIGNUP_EMAIL,
    SIGNUP_LASTNAME,
    SIGNUP_LOGIN, 
    SIGNUP_NAME, 
    SIGNUP_PASSWORD,
    SIGNUP_PASSWORD_CONFIRM
} from '../../redux/types/authInput.type'

import config from '../../config.json'

export const AuthState = ({ children }) => {
    // Контексты
    const alert = useContext(AlertContext)
    const auth  = useContext(AuthContext)

    // Store
    const [inputs, dispatch] = useReducer(AuthInputReducer, {
        [LOGIN_LOGIN]: '',
        [LOGIN_PASSWORD]: '',
        [SIGNUP_LOGIN]: '',
        [SIGNUP_EMAIL]: '',
        [SIGNUP_PASSWORD]: '',
        [SIGNUP_PASSWORD_CONFIRM]: '',
        [SIGNUP_NAME]: '',
        [SIGNUP_LASTNAME]: '',
    })

    // Custom Hooks
    const { request, isLoading } = useHttp()
    const history                = useHistory()

    // Методы
    const onChangeInputHandler = useCallback((e) => {
        dispatch(authInputAction(e))
    }, [])

    const onAsyncLogin = useCallback(async () => {
        try {
            const response = await request(`${config.SERVER_HOST}/auth/login`, 'POST', {
                login: inputs[LOGIN_LOGIN],
                password: inputs[LOGIN_PASSWORD]
            })
            alert.hide()
            auth.login(response.userId, response.token)
        } catch (e) {
            alert.show('Ошибка!', e.message, 'error')
        }
    }, [inputs])

    const onAsyncSignUp = useCallback(async () => {
        try {
            const { message } = await request(`${config.SERVER_HOST}/auth/signUp`, 'POST', {
                login: inputs[SIGNUP_LOGIN],
                password: inputs[SIGNUP_PASSWORD],
                password_confirmation: inputs[SIGNUP_PASSWORD_CONFIRM],
                email: inputs[SIGNUP_EMAIL],
                name: inputs[SIGNUP_NAME],
                lastname: inputs[SIGNUP_LASTNAME]
            })
            alert.show('Успешно!', message, 'success')
            history.push('/login')
        } catch (e) {
            alert.show('Ошибка!', e.message, 'error')
        }
    }, [inputs])

    return (
        <StateAuthContext.Provider value={{
            onChangeInputHandler, inputs, onAsyncLogin,
            isLoading, onAsyncSignUp
        }}>
            {children}
        </StateAuthContext.Provider>
    )
}