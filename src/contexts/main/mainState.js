import { useReducer, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAsyncReducer } from '../../hooks/useAsyncReducer.hook'
import { MainContext } from './mainContext'
import { AuthContext } from '../authContext'
import { AlertContext } from '../alert/alertContext'

import {
  TagsReducer,
  InputReducer,
  StatusesReducer,
  GroupReducer,
  TrashReducer,
  NoteReducer,
  NoteSettingsReducer,
} from '../../redux/reducers'

import {
  inputChangeAction,
  inputClearAction,
} from '../../redux/actions/mainActions/Input.action'

import {
  tagCreateAction,
  tagRemoveAction,
} from '../../redux/actions/mainActions/Tag.action'

import {
  statusCreateAction,
  statusRemoveAction,
  statusSelectColorAction,
} from '../../redux/actions/mainActions/Status.action'

import {
  groupAddItemAction,
  groupCreateAction,
  groupRemoveAction,
  groupRemoveItemAction,
} from '../../redux/actions/mainActions/Group.action'

import {
  trashDeleteNoteAction,
  trashDeleteTagAction,
  trashAddNoteAction,
  trashAddTagAction,
} from '../../redux/actions/mainActions/Trash.action'

import {
  INPUT_TAG_NAME,
  INPUT_STATUS_NAME,
  INPUT_GROUP_NAME,
  INPUT_NOTE_NAME,
  TEXTAREA_NOTE_NAME,
} from '../../redux/types/mainTypes/input.type'

import {
  noteNewCreateAction,
  noteCurrentRemoveAction,
  noteChangeCheckedAction,
  noteSettingsInitAction,
  noteSettingsImportantAction,
  noteSettingsReminderAction,
  noteSettingsStatusAction,
  noteSettingsTagAction,
  noteSettingsSetGroupAction,
  noteSettingsSetNoteAction,
  noteSettingsSetViewAction,
} from '../../redux/actions/mainActions/Note.action'

import { convertStringToCapitalize, debounce } from '../../utils/helpers'

export const MainState = ({ children }) => {
  // Контекст
  const auth = useContext(AuthContext)
  const alert = useContext(AlertContext)

  // Hooks
  const history = useHistory()

  // Состояние
  const [inputs, dispatchInputs] = useReducer(InputReducer, {
    [INPUT_TAG_NAME]: '',
    [INPUT_STATUS_NAME]: '',
    [INPUT_GROUP_NAME]: '',
    [INPUT_NOTE_NAME]: '',
    [TEXTAREA_NOTE_NAME]: '',
  })

  const [tags, dispatchTags] = useAsyncReducer(TagsReducer, {
    list: [],
    authorId: auth.userId,
  })

  const [statuses, dispatchStatuses] = useAsyncReducer(StatusesReducer, {
    list: [],
    authorId: auth.userId,
  })

  const [groups, dispatchGroups] = useAsyncReducer(GroupReducer, {
    list: [],
    authorId: auth.userId,
  })

  const [trash, dispatchTrash] = useAsyncReducer(TrashReducer, {
    list: [[], []],
    authorId: auth.userId,
  })

  const [notes, dispatchNotes] = useAsyncReducer(NoteReducer, [])

  const [noteSettings, dispatchNoteSettings] = useReducer(NoteSettingsReducer, {
    isImportant: false,
    status: null,
    tags: [],
    isReminder: false,

    group: null,
    note: null,
    isView: false,
  })

  const [tree, setTree] = useState(null)

  // Методы для работы с инпутами
  const onChangeInputHandler = e => {
    dispatchInputs(inputChangeAction(e))
  }

  const onClearInputHandler = () => {
    dispatchInputs(inputClearAction())
  }

  const onKeydownInputHandler = e => {
    if (e.code === 'Enter') {
      switch (e.target.name) {
        case INPUT_TAG_NAME:
          onCreateTagHandler()
          break
        case INPUT_STATUS_NAME:
          onCreateStatusHandler()
          break
        case INPUT_GROUP_NAME:
          onCreateGroupHandler()
          break
        default:
          break
      }
    }
  }

  // Методы для работы с тегами
  const onCreateTagHandler = () => {
    if (inputs[INPUT_TAG_NAME].trim()) {
      dispatchTags(
        tagCreateAction(convertStringToCapitalize(inputs[INPUT_TAG_NAME]))
      )
      onClearInputHandler()
    }
  }

  const onRemoveTagHandler = id => {
    const tag = tags.list.find(tag => tag.id === id)
    onAddTagToTrashHandler(tag)

    dispatchTags(tagRemoveAction(id))
  }

  // Методы для работы со статусами
  const onCreateStatusHandler = () => {
    if (inputs[INPUT_STATUS_NAME].trim()) {
      dispatchStatuses(
        statusCreateAction(convertStringToCapitalize(inputs[INPUT_STATUS_NAME]))
      )
      onClearInputHandler()
    }
  }

  const onRemoveStatusHandler = id => {
    dispatchStatuses(statusRemoveAction(id))
  }

  const dispatchChangeStatusColor = debounce(dispatchStatuses, 500)

  const onSelectColorHandler = (e, id) => {
    dispatchChangeStatusColor(statusSelectColorAction(e, id))
  }

  // Методы для работы с группами
  const onSelectDirHandler = id => {
    setTree(...id.slice(-1))
  }

  const onCreateGroupHandler = () => {
    if (inputs[INPUT_GROUP_NAME].trim()) {
      dispatchGroups(
        groupCreateAction(convertStringToCapitalize(inputs[INPUT_GROUP_NAME]))
      )
      onClearInputHandler()
    }
  }

  const onRemoveGroupHandler = () => {
    dispatchGroups(groupRemoveAction(tree))
    setTree(null)
  }

  const onAddItemToGroupHandler = () => {
    if (noteSettings.group && noteSettings.note) {
      dispatchGroups(groupAddItemAction(noteSettings.group, noteSettings.note))
      onNoteSettingsInitHandler()
    }
  }

  const onRemoveItemFromGroupHandler = (e, parent_key, child_key) => {
    e.preventDefault()
    dispatchGroups(groupRemoveItemAction(parent_key, child_key))
  }

  // Методы для работы с корзиной
  const onAddNoteToTrashHandler = note => {
    dispatchTrash(trashAddNoteAction(note))
  }

  const onAddTagToTrashHandler = tag => {
    dispatchTrash(trashAddTagAction(tag))
  }

  const onRemoveCurrentNoteTrashHandler = id => {
    dispatchTrash(trashDeleteNoteAction(id))
  }

  const onRemoveCurrentTagTrashHandler = id => {
    dispatchTrash(trashDeleteTagAction(id))
  }

  // Методы для работы с заметками
  const onCreateNewNoteHandler = () => {
    if (inputs[INPUT_NOTE_NAME].trim()) {
      dispatchNotes(
        noteNewCreateAction(
          inputs[INPUT_NOTE_NAME],
          inputs[TEXTAREA_NOTE_NAME],
          noteSettings.isImportant,
          noteSettings.status,
          noteSettings.tags,
          noteSettings.isReminder,
          auth.userId
        )
      )
      onNoteSettingsInitHandler()
      onClearInputHandler()
      history.push('/')
    } else {
      alert.show(
        'Предупреждение!',
        'Прежде чем создать заметку, напишите её название!',
        'warning'
      )
    }
  }

  const onRemoveNoteHandler = id => {
    const note = notes.find(n => n.id === id)

    onAddNoteToTrashHandler(note)
    dispatchNotes(noteCurrentRemoveAction(id))
  }

  const onNoteChangeCheckedHandler = id => {
    dispatchNotes(noteChangeCheckedAction(id))
  }

  const onViewNoteHandler = () => {
    dispatchNoteSettings(noteSettingsSetViewAction(noteSettings.isView))
  }

  const onViewNoteFullHandler = id => {
    history.push(`/note/${id}`)
  }

  // Методы для настройки заметок
  const onNoteSettingsInitHandler = () => {
    dispatchNoteSettings(noteSettingsInitAction())
  }

  const onNoteSettingsChangeImportantHandler = () => {
    dispatchNoteSettings(noteSettingsImportantAction())
  }

  const onNoteSettingsChangeReminderHandler = () => {
    dispatchNoteSettings(noteSettingsReminderAction())
  }

  const onNoteSettingsChangeStatusHandler = select => {
    try {
      const parsed_status = JSON.parse(select)

      dispatchNoteSettings(noteSettingsStatusAction(parsed_status))
    } catch (error) {
      dispatchNoteSettings(noteSettingsStatusAction(null))
    }
  }

  const onNoteSettingsChangeTagHandler = select => {
    dispatchNoteSettings(noteSettingsTagAction(select))
  }

  const onSelectInGroupChangeGroupHandler = group => {
    dispatchNoteSettings(noteSettingsSetGroupAction(JSON.parse(group)))
  }

  const onSelectInGroupChangeNoteHandler = note => {
    dispatchNoteSettings(noteSettingsSetNoteAction(JSON.parse(note)))
  }

  // Подписка
  const onBuyPremiumHandler = e => {
    e.preventDefault()
    alert.show('Внимание!', 'Данная функция временно отключена!', 'warning')
  }

  return (
    <MainContext.Provider
      value={{
        inputs,
        onChangeInputHandler,
        onClearInputHandler,
        tags,
        onRemoveTagHandler,
        onKeydownInputHandler,
        statuses,
        onCreateStatusHandler,
        onRemoveStatusHandler,
        onSelectColorHandler,
        trash,
        onRemoveCurrentNoteTrashHandler,
        onRemoveCurrentTagTrashHandler,
        groups,
        onSelectDirHandler,
        tree,
        onRemoveGroupHandler,
        notes,
        onNoteSettingsChangeStatusHandler,
        onNoteSettingsChangeTagHandler,
        noteSettings,
        onNoteSettingsChangeReminderHandler,
        onNoteSettingsChangeImportantHandler,
        onRemoveNoteHandler,
        onNoteChangeCheckedHandler,
        onSelectInGroupChangeNoteHandler,
        onSelectInGroupChangeGroupHandler,
        onAddItemToGroupHandler,
        onRemoveItemFromGroupHandler,
        onCreateNewNoteHandler,
        onViewNoteHandler,
        onViewNoteFullHandler,
        onBuyPremiumHandler,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
