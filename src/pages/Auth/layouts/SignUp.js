import { useContext } from 'react'
import { Input, Button } from 'antd'
import { StateAuthContext } from '../../../contexts/auth/stateContext'
import { 
    SIGNUP_LOGIN,
    SIGNUP_EMAIL,
    SIGNUP_PASSWORD,
    SIGNUP_PASSWORD_CONFIRM,
    SIGNUP_NAME, 
    SIGNUP_LASTNAME
} from '../../../redux/types/authInput.type'
import 'antd/dist/antd.css'

export const SignUp = () => {
    const { 
        inputs, 
        isLoading,
        onAsyncSignUp,
        onChangeInputHandler
    } = useContext(StateAuthContext)
    return (
        <div className="body">
            <h2 className='body__title'>Решили зарегистрировать новый аккаунт ?</h2>
            
            <div className="forms">
                <div className="form-input">
                    <label htmlFor="login">Логин:</label>
                    <Input 
                        placeholder='TENSIILE' 
                        id='login'
                        value={inputs[SIGNUP_LOGIN]}
                        name={SIGNUP_LOGIN}
                        onChange={onChangeInputHandler}
                    />
                </div>

                <div className="form-input">
                    <label htmlFor="email">Email:</label>
                    <Input 
                        placeholder='example@gmail.com' 
                        id='email'
                        value={inputs[SIGNUP_EMAIL]}
                        name={SIGNUP_EMAIL}
                        onChange={onChangeInputHandler}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Пароль:</label>
                    <Input.Password 
                        placeholder='1234567890' 
                        id='password'
                        value={inputs[SIGNUP_PASSWORD]}
                        name={SIGNUP_PASSWORD}
                        onChange={onChangeInputHandler}
                    />
                </div>

                <div className="form-input">
                    <label htmlFor="password_repeat">Повторите пароль:</label>
                    <Input.Password 
                        placeholder='1234567890' 
                        id='password_repeat'
                        value={inputs[SIGNUP_PASSWORD_CONFIRM]}
                        name={SIGNUP_PASSWORD_CONFIRM}
                        onChange={onChangeInputHandler}
                    />
                </div>

                <div className="form-input">
                    <label htmlFor="name">Имя:</label>
                    <Input 
                        placeholder='Владислав' 
                        id='name'
                        value={inputs[SIGNUP_NAME]}
                        name={SIGNUP_NAME}
                        onChange={onChangeInputHandler}
                    />
                </div>

                <div className="form-input">
                    <label htmlFor="lastname">Фамилия:</label>
                    <Input 
                        placeholder='Лаптев' 
                        id='lastname'
                        value={inputs[SIGNUP_LASTNAME]}
                        name={SIGNUP_LASTNAME}
                        onChange={onChangeInputHandler}
                    />
                </div>
            </div>
            
            <Button 
                type='primary'
                size='large'
                onClick={onAsyncSignUp}
                disabled={isLoading}
                loading={isLoading}
            >
                Регистрация
            </Button>
        </div>
    )
}