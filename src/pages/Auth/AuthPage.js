import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../static/icons/Logo.svg'
import authImg from '../../static/icons/authentication.svg'

import './AuthPage.scss'

export const AuthPage = ({ children }) => {
    return (
        <section className="authorization">
            <aside>
                <div className="logo">
                    <Logo/>
                    <h1>Kilter</h1>
                </div>
                <div className="text">
                    <h1 className="text__heading">Приведите все в порядок
                    с Kilter</h1>
                    <p className='text__description'>Kilter дает уверенность в том, что все организовано и принято во внимание, чтобы вы могли преуспеть в важных для себя делах.</p>
                </div>
                <img src={authImg} alt=""/>
            </aside>
            <main>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/login'>Авторизация</Link></li>
                            <li><Link to='/signUp'>Регистрация</Link></li>
                        </ul>
                    </nav>
                </header>
                {children}
            </main>
        </section>
    )
}