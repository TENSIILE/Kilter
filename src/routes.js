import { Route, Switch, Redirect } from 'react-router-dom'
import { AuthPage } from './pages/Auth/AuthPage'
import { LogIn, SignUp } from './pages/Auth/layouts'
import { MainPage } from './pages/Main/MainPage'
import {
  Inbox,
  Tags,
  Statuses,
  Groups,
  Trash,
  CreateNode,
  CreateNoteSettings,
  PreviewNote,
} from './pages/Main/layouts'
import { AuthState } from './contexts/auth/authState'
import { MainState } from './contexts/main/mainState'
import { Wrapper } from './Wrapper'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <MainState>
          <MainPage>
            <Wrapper>
              <Route path='/' exact>
                <Inbox />
              </Route>
              <Route path='/tags'>
                <Tags />
              </Route>
              <Route path='/statuses'>
                <Statuses />
              </Route>
              <Route path='/groups'>
                <Groups />
              </Route>
              <Route path='/trash'>
                <Trash />
              </Route>
              <Route path='/create' exact>
                <CreateNode />
              </Route>
              <Route path='/create/settings'>
                <CreateNoteSettings />
              </Route>
              <Route path='/note/:id'>
                <PreviewNote />
              </Route>
              <Redirect to='/' />
            </Wrapper>
          </MainPage>
        </MainState>
      </Switch>
    )
  }

  return (
    <Switch>
      <AuthPage>
        <AuthState>
          <Wrapper>
            <Route path='/login' exact>
              <LogIn />
            </Route>
            <Route path='/signUp'>
              <SignUp />
            </Route>
            <Redirect to='/login' />
          </Wrapper>
        </AuthState>
      </AuthPage>
    </Switch>
  )
}
