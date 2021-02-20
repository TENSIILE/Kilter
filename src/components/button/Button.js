import { Button as ButtonAnt } from 'antd'
import { ReactComponent as PlusSvg } from '../../static/icons/plus.svg'
import './Button.scss'

export const Button = ({ children, onClick, icon = <PlusSvg/> }) => (
    <ButtonAnt 
        shape='circle' 
        type='primary'
        size='large'
        icon={icon}
        onClick={onClick}
        className='btn-kilter'
    >
        {children}
    </ButtonAnt>
)