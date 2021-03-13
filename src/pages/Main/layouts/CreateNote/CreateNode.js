import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import marked from 'marked'
import { Input } from '../../../../components'
import { MainContext } from '../../../../contexts/main/mainContext'
import {
  INPUT_NOTE_NAME,
  TEXTAREA_NOTE_NAME,
} from '../../../../redux/types/mainTypes/input.type'
import './CreateNode.scss'

export const CreateNode = () => {
  const logic = useContext(MainContext)

  return (
    <div className='create_note'>
      {!logic.noteSettings.isView ? (
        <div className='inputs_text'>
          <Input
            placeholder='Название новой заметки...'
            name={INPUT_NOTE_NAME}
            value={logic.inputs[INPUT_NOTE_NAME]}
            onChange={logic.onChangeInputHandler}
          />
          <Input.Textarea
            placeholder='Описание заметки...'
            name={TEXTAREA_NOTE_NAME}
            value={logic.inputs[TEXTAREA_NOTE_NAME]}
            onChange={logic.onChangeInputHandler}
          />
        </div>
      ) : (
        <div
          className='create_note__preview'
          dangerouslySetInnerHTML={{
            __html: marked(logic.inputs[TEXTAREA_NOTE_NAME]),
          }}
        />
      )}
      <div className='btn_actions'>
        <Button
          size='large'
          type='primary'
          onClick={logic.onCreateNewNoteHandler}
        >
          Создать
        </Button>
        <Button size='large' danger onClick={logic.onViewNoteHandler}>
          Превью
        </Button>
        <Link to='/create/settings'>
          <Button size='large'>Настройки</Button>
        </Link>
      </div>
    </div>
  )
}
