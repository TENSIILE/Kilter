import { ReactComponent as EmptyLogo } from '../../static/icons/inbox.svg'
import './Empty.scss'

export const Empty = ({ text }) => {
  return (
    <div className='empty_data'>
      <EmptyLogo className='empty_data__icon' />
      <span className='empty_data__text'>{text}</span>
    </div>
  )
}
