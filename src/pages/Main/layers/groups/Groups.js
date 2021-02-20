import { Link } from 'react-router-dom'
import { ReactComponent as Threeline } from '../../../../static/icons/menu-of-three-lines.svg'
import './Groups.scss'

export const Groups = () => {
    return (
        <div className="groups">
            <div className="groups__section">
                <h4 className='groups__section-title'>Книги</h4>
                <div className="groups__item">
                    <Link to='/'>
                        <Threeline/>
                        <p>Книга 1</p>
                    </Link>
                    <Link to='/'>
                        <Threeline/>
                        <p>Книга 1</p>
                    </Link>
                    <Link to='/'>
                        <Threeline/>
                        <p>Книга 1</p>
                    </Link>
                    <Link to='/'>
                        <Threeline/>
                        <p>Книга 1</p>
                    </Link>
                </div>
            </div>
            <div className="groups__section">
                <h4 className='groups__section-title'>Новости</h4>
                <div className="groups__item">
                    <Link to='/'>
                        <Threeline/>
                        <p>Новость 1</p>
                    </Link>
                    <Link to='/'>
                        <Threeline/>
                        <p>Новость 1</p>
                    </Link>
                    <Link to='/'>
                        <Threeline/>
                        <p>Новость 1</p>
                    </Link>
                    <Link to='/'>
                        <Threeline/>
                        <p>Новость 1</p>
                    </Link>
                    <Link to='/'>
                        <Threeline/>
                        <p>Новость 1</p>
                    </Link>
                    <Link to='/'>
                        <Threeline/>
                        <p>Новость 1</p>
                    </Link>
                    <Link to='/'>
                        <Threeline/>
                        <p>Новость 1</p>
                    </Link>
                    <Link to='/'>
                        <Threeline/>
                        <p>Новость 1</p>
                    </Link>
                    <Link to='/'>
                        <Threeline/>
                        <p>Новость 1</p>
                    </Link>
                    <Link to='/'>
                        <Threeline/>
                        <p>Новость 1</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}