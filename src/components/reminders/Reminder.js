import './Reminder.scss'

export const Reminder = ({ timeStart = '8:05', timeEnd = '9:50', title = 'Название напоминания 1' }) => {
    return (
        <div className='reminder'>
            <span className="reminder__date">{`${timeStart} - ${timeEnd}`}</span>
            <h2 className='reminder__title'>{title}</h2>
        </div>
    )
}

Reminder.Container = ({ children }) => {
    return (
        <div className='reminder__container'>
            <h1>Напоминания</h1>
            {children}
        </div>
    )
}