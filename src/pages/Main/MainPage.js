import { useRoute } from '../../hooks/useRoute.hook'
import { Sidebar } from './layers/sidebar/Sidebar'
import { MainHead } from './layers/head/MainHead'
import { Reminder } from '../../components'
import './MainPage.scss'

export const MainPage = ({ children }) => {
    const { title, pass } = useRoute()
    
    return (
        <div className='main'>
            <Sidebar/>
            <div className="content">
                <MainHead title={title && title}/>
                <div className="content__body">
                    {children}
                    {
                        pass && (
                            <Reminder.Container>
                                <Reminder/>
                                <Reminder/>
                                <Reminder/>
                                <Reminder/>
                            </Reminder.Container>
                        )
                    }
                </div>
            </div>
        </div>
    )
}