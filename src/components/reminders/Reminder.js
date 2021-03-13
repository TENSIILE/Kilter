import classnames from 'classnames'
import { LightenDarkenColor } from 'lighten-darken-color'
import { Empty } from '../'
import './Reminder.scss'

export const Reminder = ({ title, className, color }) => {
  return (
    <div
      className={classnames('reminder', [className])}
      style={{
        backgroundColor: color && LightenDarkenColor(color, 200),
      }}
    >
      <h2 className='reminder__title'>{title}</h2>
    </div>
  )
}

Reminder.Container = ({ children }) => {
  if (!children.length) {
    return (
      <div className='reminder_container'>
        <h1>Напоминания</h1>
        <Empty text='Напоминаний нет!' />
      </div>
    )
  }

  return (
    <div className='reminder_container'>
      <h1>Напоминания</h1>
      {children}
    </div>
  )
}
