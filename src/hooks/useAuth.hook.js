import { useState, useCallback, useEffect } from 'react'
import config from '../config.json'

export const useAuth = () => {
    const [userId, setUserId] = useState(null)
    const [token, setToken]   = useState(null)

    const NAME_SESSION = config.SESSION_NAME

    const login = useCallback((userId, token) => {

        sessionStorage.setItem(NAME_SESSION, JSON.stringify({
            userId, token
        }))

        setToken(token)
        setUserId(userId)
    }, [])

    const logout = useCallback(() => {
        setUserId(null)
        setToken(null)

        sessionStorage.removeItem(NAME_SESSION)
    }, [])

    useEffect(() => {
        if (sessionStorage.getItem(NAME_SESSION)) {
            try {
                const data = JSON.parse(sessionStorage.getItem(NAME_SESSION))

                if (data) {
                    login(data.userId, data.token)
                }  
            } catch (error) {}
        }
    }, [login])

    return { userId, token, logout, login }
}