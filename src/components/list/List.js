import { Checkbox } from 'antd'
import classnames from 'classnames'
import { ReactComponent as TrashSvg } from '../../static/icons/trash.svg'
import { ReactComponent as ViewSvg } from '../../static/icons/view.svg'
import { ReactComponent as PickerSvg } from '../../static/icons/eyedropper.svg'
import './List.scss'

export const ListNotes = () => {
    return (
        <div className="list-notes">
            <ul className="list-notes__catalog">
                <li className="list-notes__item">
                    <Checkbox/>
                    <p>Закончить написание курсовой работы</p>
                    <span className="status">Закончен</span>
                    <div className="list-notes__item-action">
                        <ViewSvg className='view'/>
                        <TrashSvg className='trash'/>
                    </div>
                </li>
                <li className="list-notes__item">
                    <Checkbox/>
                    <p>Закончить написание курсовой работы</p>
                    <span className="status">Закончен</span>
                    <div className="list-notes__item-action">
                        <ViewSvg className='view'/>
                        <TrashSvg className='trash'/>
                    </div>
                </li>
                <li className="list-notes__item">
                    <Checkbox/>
                    <p>Закончить написание курсовой работы</p>
                    <span className="status">Закончен</span>
                    <div className="list-notes__item-action">
                        <ViewSvg className='view'/>
                        <TrashSvg className='trash'/>
                    </div>
                </li>
                <li className="list-notes__item">
                    <Checkbox/>
                    <p>Закончить написание курсовой работы</p>
                    <span className="status">Закончен</span>
                    <div className="list-notes__item-action">
                        <ViewSvg className='view'/>
                        <TrashSvg className='trash'/>
                    </div>
                </li>
                <li className="list-notes__item">
                    <Checkbox/>
                    <p>Закончить написание курсовой работы</p>
                    <span className="status">Закончен</span>
                    <div className="list-notes__item-action">
                        <ViewSvg className='view'/>
                        <TrashSvg className='trash'/>
                    </div>
                </li>
            </ul>
        </div>
    )
}


ListNotes.Tag = ({ className }) => (
    <div className="list-notes">
        <ul className="list-notes__catalog">
            <li className="list-notes__item tag">
                <p>Закончить написание курсовой работы</p>
                <div className={classnames('list-notes__item-action', [className])}>
                    <TrashSvg className='trash'/>
                </div>
            </li>
            <li className="list-notes__item tag">
                <p>Закончить написание курсовой работы</p>
                <div className={classnames('list-notes__item-action', [className])}>
                    <TrashSvg className='trash'/>
                </div>
            </li>
        </ul>
    </div>
)

ListNotes.Tag.Status = () => (
    <div className="list-notes">
        <ul className="list-notes__catalog">
            <li className="list-notes__item status">
                <p>Закончить написание курсовой работы</p>
                <div className="list-notes__item-action">
                    <PickerSvg className='picker'/>
                    <TrashSvg className='trash'/>
                </div>
            </li>
            <li className="list-notes__item status">
                <p>Закончить написание курсовой работы</p>
                <div className="list-notes__item-action">
                    <PickerSvg className='picker'/>
                    <TrashSvg className='trash'/>
                </div>
            </li>
        </ul>
    </div>
)