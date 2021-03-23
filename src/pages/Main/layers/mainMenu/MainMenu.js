import { useContext } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { RouteContext } from '../../../../contexts/routeContext'
import { MainContext } from '../../../../contexts/main/mainContext'
import { ReactComponent as InboxSvg } from '../../../../static/icons/inbox.svg'
import { ReactComponent as TrashSvg } from '../../../../static/icons/trash.svg'
import { ReactComponent as TagSvg } from '../../../../static/icons/tag.svg'
import { ReactComponent as BoxSvg } from '../../../../static/icons/delivery-box.svg'
import { ReactComponent as DocumentSvg } from '../../../../static/icons/document.svg'
import { ReactComponent as SubsSvg } from '../../../../static/icons/subscription.svg'
import './MainMenu.scss'

export const MainMenu = () => {
  const logic = useContext(MainContext)
  const { focus } = useContext(RouteContext)

  return (
    <div className='main-menu'>
      <ul className='main-menu__list'>
        <li className={classnames('main-menu__item', { active: focus['/'] })}>
          <Link to='/'>
            <InboxSvg />
            <h3>Главная</h3>
          </Link>
        </li>
        <li className={classnames('main-menu__item', { active: focus.tags })}>
          <Link to='/tags'>
            <TagSvg />
            <h3>Теги</h3>
          </Link>
        </li>
        <li
          className={classnames('main-menu__item', { active: focus.statuses })}
        >
          <Link to='/statuses'>
            <DocumentSvg />
            <h3>Статусы</h3>
          </Link>
        </li>
        <li className={classnames('main-menu__item', { active: focus.groups })}>
          <Link to='/groups'>
            <BoxSvg />
            <h3>Группы</h3>
          </Link>
        </li>
        <li className={classnames('main-menu__item', { active: focus.trash })}>
          <Link to='/trash'>
            <TrashSvg />
            <h3>Корзина</h3>
          </Link>
        </li>
        <li className='main-menu__item premium'>
          <Link to='' onClick={logic.onBuyPremiumHandler}>
            <SubsSvg />
            <h3>Купить Premium</h3>
          </Link>
        </li>
      </ul>
    </div>
  )
}
