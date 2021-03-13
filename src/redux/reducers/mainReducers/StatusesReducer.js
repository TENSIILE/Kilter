import {
  STATUS_CREATE,
  STATUS_REMOVE,
  STATUS_SELECT_COLOR,
} from '../../types/mainTypes/statuses.type'
import { INIT } from '../../types/system.type'
import { API } from '../../../api/api'

export const StatusesReducer = async (state, action) => {
  switch (action.type) {
    case INIT:
      const list = await API().GET_DATA('getStatuses')

      if (list) {
        return { ...state, list }
      }

      return state
    case STATUS_CREATE:
      const local_state_status_create = {
        ...state,
        list: [...state.list, action.payload],
      }
      await API().SET_DATA(
        'setStatus',
        JSON.stringify(local_state_status_create.list)
      )
      return local_state_status_create
    case STATUS_REMOVE:
      const local_state_status_remove = {
        ...state,
        list: state.list.filter(status => status.id !== action.payload),
      }
      await API().SET_DATA(
        'setStatus',
        JSON.stringify(local_state_status_remove.list)
      )
      return local_state_status_remove
    case STATUS_SELECT_COLOR:
      const local_state_status_select_color = {
        ...state,
        list: state.list.map(status => {
          if (status.id === action.payload.id) {
            return {
              ...status,
              color: action.payload.e.target.value,
            }
          }
          return status
        }),
      }
      await API().SET_DATA(
        'setStatus',
        JSON.stringify(local_state_status_select_color.list)
      )
      return local_state_status_select_color
    default:
      return state
  }
}
