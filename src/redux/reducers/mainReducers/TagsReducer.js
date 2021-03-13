import { TAG_CREATE, TAG_REMOVE } from '../../types/mainTypes/tags.type'
import { INIT } from '../../types/system.type'
import { API } from '../../../api/api'

export const TagsReducer = async (state, action) => {
  switch (action.type) {
    case INIT:
      const list = await API().GET_DATA('getTags')

      if (list) {
        return { ...state, list }
      }

      return state
    case TAG_CREATE:
      const local_state_tag_create = {
        ...state,
        list: [...state.list, action.payload],
      }
      await API().SET_DATA(
        'setTag',
        JSON.stringify(local_state_tag_create.list)
      )
      return local_state_tag_create
    case TAG_REMOVE:
      const local_state_tag_remove = {
        ...state,
        list: state.list.filter(tag => tag.id !== action.payload),
      }
      await API().SET_DATA(
        'setTag',
        JSON.stringify(local_state_tag_remove.list)
      )
      return local_state_tag_remove
    default:
      return state
  }
}
