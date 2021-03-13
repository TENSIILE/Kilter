import { useContext } from 'react'
import { Popconfirm } from 'antd'
import { Button } from '../../../../components'
import { AuthContext } from '../../../../contexts/authContext'
import { ReactComponent as UserSvg } from '../../../../static/icons/user.svg'

export const MainHead = ({ title }) => {
  const { logout } = useContext(AuthContext)

  return (
    <div className='content__header'>
      <h1 className='content__title'>{title}</h1>
      <Popconfirm
        placement='bottomRight'
        title='Вы действительно хотите выйти?'
        okText='Да'
        cancelText='Нет'
        onConfirm={logout}
      >
        <Button icon={<UserSvg />} />
      </Popconfirm>
    </div>
  )
}
