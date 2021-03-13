import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Button } from '../../../../components'
import { MainMenu } from '../mainMenu/MainMenu'
import { Groups } from '../groups/Groups'
import { ReactComponent as Logo } from '../../../../static/icons/Logo.svg'
import { ReactComponent as PlusSvg } from '../../../../static/icons/plus.svg'
import './Sidebar.scss'

export default () => {
    const sidebar = document.querySelector('#root .container .main .sidebar')
    return sidebar && ReactDOM.createPortal(
        <>
            <div className="sidebar__logo">
                <Logo/>
                <h1 className='sidebar__logo-title'>Kilter</h1>
            </div>
            <div className="sidebar__container">
                <MainMenu/>
                <Groups/>
                <div className="sidebar__footer">
                    <Link to='/create'>
                        <Button 
                            type='primary'
                            size='large'
                            shape='circle'
                            icon={<PlusSvg/>}
                        />
                    </Link>
                </div>
            </div>
        </>, sidebar
    )
}