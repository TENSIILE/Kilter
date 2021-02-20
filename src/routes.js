import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthPage } from './pages/Auth/AuthPage'
import { LogIn, SignUp } from './pages/Auth/layouts'
import { MainPage } from './pages/Main/MainPage'
import { Inbox, Tags, Statuses, Groups, Trash, CreateNode } from './pages/Main/layouts'
import { AuthState } from './contexts/auth/authState'
import { Wrapper } from './Wrapper'

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <MainPage>
                    <Wrapper>
                        <Route path='/' exact>
                            <Inbox/>
                        </Route>
                        <Route path='/tags'>
                            <Tags/>
                        </Route>
                        <Route path='/statuses'>
                            <Statuses/>
                        </Route>
                        <Route path='/groups'>
                            <Groups/>
                        </Route>
                        <Route path='/trash'>
                            <Trash/>
                        </Route>
                        <Route path='/create'>
                            <CreateNode/>
                        </Route>
                        <Redirect to='/'/>
                    </Wrapper>
                </MainPage>
            </Switch>
        )
    }

    return (
        <Switch>
            <AuthPage>
                <AuthState>
                    <Wrapper>
                        <Route path='/login' exact>
                            <LogIn/>
                        </Route>
                        <Route path='/signUp'>
                            <SignUp/>
                        </Route>
                        <Redirect to='/login'/>
                    </Wrapper>
                </AuthState>
            </AuthPage>
        </Switch>
    )
}