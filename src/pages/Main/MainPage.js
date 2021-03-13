import { useContext } from 'react'
import { useRoute } from '../../hooks/useRoute.hook'
import { RouteContext } from '../../contexts/routeContext'
import { MainHead } from './layers/head/MainHead'
import { Reminder } from '../../components'
import { MainContext } from '../../contexts/main/mainContext'
import './MainPage.scss'

export const MainPage = ({ children }) => {
  const logic = useContext(MainContext)
  const { title, pass, focus, setPass, setTitle } = useRoute()

  return (
    <RouteContext.Provider value={{ focus, setPass, setTitle }}>
      <div className='main'>
        <div className='sidebar' />
        <div className='content'>
          <MainHead title={title && title} />
          <div className='content__body'>
            {children}
            {pass && (
              <Reminder.Container>
                {logic.notes.length &&
                  logic.notes
                    .filter(note => note.isReminder)
                    .map(note => (
                      <Reminder
                        key={note.id}
                        title={note.title}
                        color={note?.status?.color}
                      />
                    ))}
              </Reminder.Container>
            )}
          </div>
        </div>
      </div>
    </RouteContext.Provider>
  )
}
