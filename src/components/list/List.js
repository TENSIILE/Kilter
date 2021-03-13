import { Checkbox } from 'antd'
import { LightenDarkenColor } from 'lighten-darken-color'
import { Empty } from '../'
import { ReactComponent as TrashSvg } from '../../static/icons/trash.svg'
import { ReactComponent as ViewSvg } from '../../static/icons/view.svg'
import { ReactComponent as PickerSvg } from '../../static/icons/eyedropper.svg'
import './List.scss'

export const ListNotes = ({ list = [], onRemove, onView, onChangeChecked }) => {
  return (
    <div className='list-notes'>
      <ul className='list-notes__catalog'>
        {!!list.length ? (
          list.map(note => (
            <li className='list-notes__item' key={note.id}>
              <Checkbox
                onChange={() => onChangeChecked(note.id)}
                checked={!!note.checked}
              />
              <p>{note.title}</p>
              {note.status && (
                <span
                  className='status'
                  style={{
                    color: note.status?.color && note.status.color,
                    backgroundColor:
                      note.status?.color &&
                      LightenDarkenColor(note.status.color, 230),
                  }}
                >
                  {note.status.title}
                </span>
              )}
              <div className='list-notes__item-action'>
                <ViewSvg className='view' onClick={() => onView(note.id)} />
                <TrashSvg className='trash' onClick={() => onRemove(note.id)} />
              </div>
            </li>
          ))
        ) : (
          <Empty text='Список заметок пуст!' />
        )}
      </ul>
    </div>
  )
}

ListNotes.Tag = ({ list, onRemove }) => (
  <div className='list-notes'>
    <ul className='list-notes__catalog'>
      {!!list.length ? (
        list.map(el => (
          <li className='list-notes__item tag' key={el.id}>
            <p>{el.title}</p>
            <div className='list-notes__item-action tag'>
              <TrashSvg className='trash' onClick={() => onRemove(el.id)} />
            </div>
          </li>
        ))
      ) : (
        <Empty text='Список тегов пуст!' />
      )}
    </ul>
  </div>
)

ListNotes.Tag.Status = ({ list, onRemoveStatus, onSelectColor }) => (
  <div className='list-notes'>
    <ul className='list-notes__catalog'>
      {!!list.length ? (
        list.map(el => (
          <li className='list-notes__item status' key={el.id}>
            <p style={{ color: el.color && el.color }}>{el.title}</p>
            <div className='list-notes__item-action status'>
              <label htmlFor={`color${el.id}`}>
                <PickerSvg className='picker' />
              </label>
              <input
                type='color'
                id={`color${el.id}`}
                onChange={e => onSelectColor(e, el.id)}
              />
              <TrashSvg
                className='trash'
                onClick={() => onRemoveStatus(el.id)}
              />
            </div>
          </li>
        ))
      ) : (
        <Empty text='Список статусов пуст!' />
      )}
    </ul>
  </div>
)
