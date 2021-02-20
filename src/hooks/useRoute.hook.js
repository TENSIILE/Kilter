import { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

export const useRoute = () => {
    const [title, setTitle] = useState(null)
    const [pass, setPass]   = useState(true)
    const history           = useHistory()

    const [focus, setFocus] = useState({})
    const page              = useRef(null)

    const defaultFocus = {
        '/': false, tags: false, statuses: false, groups: false, trash: false
    }

    useEffect(() => {
        if (history.location.pathname.length > 1) {
            page.current = history.location.pathname.substring(1, history.location.pathname.length)
        } else {
             page.current = history.location.pathname
        }
        
        setFocus({...defaultFocus, [page.current]: true}) 
    }, [page, history.location])

    useEffect(() => {
        const { pathname } = history.location

        setPass(true)
    
        switch (pathname) {
            case '/':
                setTitle('Главная')
                break
            case '/tags':
                setTitle('Теги')
                break
            case '/statuses':
                setTitle('Статусы')
                break
            case '/groups':
                setTitle('Группы')
                break
            case '/trash':
                setTitle('Корзина')
                break
            case '/create':
                setTitle('Создание новой заметки')
                setPass(false)
                break
            default:
                break
        }
    }, [history.location.pathname])

    return { title, pass, focus }
}