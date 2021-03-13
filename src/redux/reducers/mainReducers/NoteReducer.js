import {
  NOTE_CREATE,
  NOTE_REMOVE,
  NOTE_CHECKED,
  NOTE_CHANGE_IMPORTANT,
  NOTE_CHANGE_REMINDER,
  NOTE_CHANGE_STATUS,
  NOTE_CHANGE_TAGS,
  NOTE_CHANGE_INIT,
  NOTE_SELECT_GROUP,
  NOTE_SELECT_NOTE,
  NOTE_VIEW_NOTE,
} from '../../types/mainTypes/note.type'
import { INIT } from '../../types/system.type'
import { API } from '../../../api/api'

export const NoteReducer = async (state, action) => {
  const _note = action.payload

  switch (action.type) {
    case INIT:
      const res = await API().getNote()

      if (res.length) {
        return res.map(note => {
          try {
            note.tags = JSON.parse(note.tags)
            note.status = JSON.parse(note.status)

            return note
          } catch (error) {
            return note
          }
        })
      }

      return state
    case NOTE_CREATE:
      await API().setNote(
        _note.id,
        _note.title,
        _note.description,
        _note.isImportant,
        _note.status,
        _note.tags,
        _note.isReminder,
        _note.checked
      )
      return [...state, action.payload]
    case NOTE_REMOVE:
      return state.filter(note => note.id !== action.payload)
    case NOTE_CHECKED:
      await API().checkedNote(action.payload)
      return state.map(note => {
        if (note.id === action.payload) {
          return { ...note, checked: !note.checked }
        }
        return note
      })
    default:
      return state
  }
}

export const NoteSettingsReducer = (state, action) => {
  switch (action.type) {
    case NOTE_CHANGE_IMPORTANT:
      return { ...state, isImportant: !state.isImportant }
    case NOTE_CHANGE_REMINDER:
      return { ...state, isReminder: !state.isReminder }
    case NOTE_CHANGE_STATUS:
      return { ...state, status: action.payload }
    case NOTE_CHANGE_TAGS:
      return { ...state, tags: action.payload }
    case NOTE_CHANGE_INIT:
      const initialState = {}

      for (let i in state) initialState[i] = false

      return initialState
    case NOTE_SELECT_NOTE:
      return { ...state, note: action.payload }
    case NOTE_SELECT_GROUP:
      return { ...state, group: action.payload }
    case NOTE_VIEW_NOTE:
      return { ...state, isView: !action.payload }
    default:
      return state
  }
}
