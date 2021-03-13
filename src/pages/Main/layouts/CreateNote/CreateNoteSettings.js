import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Switch, Select, Button } from 'antd'
import { MainContext } from '../../../../contexts/main/mainContext'

export const CreateNoteSettings = () => {
  const logic = useContext(MainContext)
  const { Option } = Select

  return (
    <div className='create_note_settings'>
      <ul className='create_note_settings__list'>
        <li className='create_note_settings__item'>
          <div className='create_note_settings__flex item--center'>
            <div className='create_note_settings__text'>
              <h3>Установить важность заметки</h3>
              <span>
                При установке данного пункта, данную заметку можно будет найти
                быстрее в списке ваших заметок
              </span>
            </div>
            <Switch
              checked={logic.noteSettings.isImportant}
              onChange={logic.onNoteSettingsChangeImportantHandler}
            />
          </div>
        </li>
        <li className='create_note_settings__item'>
          <div className='create_note_settings__flex item--center'>
            <div className='create_note_settings__text'>
              <h3>Статус</h3>
            </div>
            <Select
              size='large'
              placeholder='Выберите статус'
              onChange={logic.onNoteSettingsChangeStatusHandler}
              defaultValue={logic.noteSettings.status?.title}
            >
              {logic.statuses.list &&
                logic.statuses.list.map(
                  status =>
                    status && (
                      <Option key={status.id} value={JSON.stringify(status)}>
                        {status.title}
                      </Option>
                    )
                )}
            </Select>
          </div>
        </li>
        <li className='create_note_settings__item item--center'>
          <div className='create_note_settings__flex item--center'>
            <div className='create_note_settings__text'>
              <h3>Установка тегов</h3>
            </div>
            <Select
              size='large'
              mode='multiple'
              placeholder='Выберите теги'
              onChange={logic.onNoteSettingsChangeTagHandler}
              defaultValue={logic.noteSettings.tags}
            >
              {logic.tags.list &&
                logic.tags.list.map(tag => (
                  <Option key={tag.id} value={tag.title}>
                    {tag.title}
                  </Option>
                ))}
            </Select>
          </div>
        </li>
        <li className='create_note_settings__item'>
          <div className='create_note_settings__flex item--center'>
            <div className='create_note_settings__text'>
              <h3>Напоминания</h3>
              <span>
                Сделайте из вашей заметки напоминания, чтобы никогда не забыть
                важную информацию
              </span>
            </div>
            <Switch
              checked={logic.noteSettings.isReminder}
              onChange={logic.onNoteSettingsChangeReminderHandler}
            />
          </div>
        </li>
      </ul>
      <Link to='/create'>
        <Button size='large'>Назад</Button>
      </Link>
    </div>
  )
}
