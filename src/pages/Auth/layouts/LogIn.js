import { useContext } from 'react'
import { Input, Button } from 'antd'
import { StateAuthContext } from '../../../contexts/auth/stateContext'
import {
  LOGIN_LOGIN,
  LOGIN_PASSWORD,
} from '../../../redux/types/authInput.type'
import 'antd/dist/antd.css'

export const LogIn = () => {
  const { inputs, onChangeInputHandler, onAsyncLogin, isLoading } = useContext(
    StateAuthContext
  )

  return (
    <div className='body'>
      <h2 className='body__title'>Добро Пожаловать, пользователь</h2>
      <span className='body__description'>
        Войдите в систему, для того чтобы начать
      </span>

      <div className='forms'>
        <div className='form-input'>
          <label htmlFor='login'>Логин:</label>
          <Input
            placeholder='TENSIILE'
            id='login'
            value={inputs[LOGIN_LOGIN]}
            name={LOGIN_LOGIN}
            onChange={onChangeInputHandler}
          />
        </div>

        <div className='form-input'>
          <label htmlFor='password'>Пароль:</label>
          <Input.Password
            placeholder='Ваш пароль'
            id='password'
            value={inputs[LOGIN_PASSWORD]}
            name={LOGIN_PASSWORD}
            onChange={onChangeInputHandler}
          />
        </div>
      </div>

      <Button
        type='primary'
        size='large'
        onClick={onAsyncLogin}
        disabled={isLoading}
        loading={isLoading}
      >
        Войти
      </Button>
    </div>
  )
}
