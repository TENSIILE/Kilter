import {
  TRASH_DELETE_NOTE,
  TRASH_DELETE_TAG,
  TRASH_ADD_NOTE,
  TRASH_ADD_TAG,
} from '../../types/mainTypes/trash.type'
import { INIT } from '../../types/system.type'
import { API } from '../../../api/api'

export const TrashReducer = async (state, action) => {
  switch (action.type) {
    case INIT:
      const list = await API().GET_DATA('getTrash')

      if (list) {
        return { ...state, list }
      }

      return state
    case TRASH_ADD_NOTE:
      const local_state_add_note = {
        ...state,
        list: [[...state.list[0], action.payload], [...state.list[1]]],
      }

      await API().SET_DATA(
        'setTrash',
        JSON.stringify(local_state_add_note.list)
      )

      return local_state_add_note
    case TRASH_ADD_TAG:
      const local_state_add_tag = {
        ...state,
        list: [[...state.list[0]], [...state.list[1], action.payload]],
      }

      await API().SET_DATA('setTrash', JSON.stringify(local_state_add_tag.list))

      return local_state_add_tag
    case TRASH_DELETE_NOTE:
      const local_state_delete_note = {
        ...state,
        list: [
          [...state.list[0].filter(note => note.id !== action.payload)],
          [...state.list[1]],
        ],
      }

      await API().SET_DATA(
        'setTrash',
        JSON.stringify(local_state_delete_note.list)
      )
      await API().removeNote(action.payload)

      return local_state_delete_note
    case TRASH_DELETE_TAG:
      const local_state_delete_tag = {
        ...state,
        list: [
          [...state.list[0]],
          [...state.list[1].filter(tag => tag.id !== action.payload)],
        ],
      }

      await API().SET_DATA(
        'setTrash',
        JSON.stringify(local_state_delete_tag.list)
      )

      return local_state_delete_tag
    default:
      return state
  }
}
