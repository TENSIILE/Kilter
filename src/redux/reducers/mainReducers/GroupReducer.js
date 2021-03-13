import {
  GROUP_ADD_ITEM,
  GROUP_REMOVE_ITEM,
  GROUP_REMOVE,
  GROUP_CREATE,
} from '../../types/mainTypes/group.type'
import { INIT } from '../../types/system.type'
import { API } from '../../../api/api'

export const GroupReducer = async (state, action) => {
  switch (action.type) {
    case INIT:
      const list = await API().GET_DATA('getGroups')

      if (list) {
        return { ...state, list }
      }

      return state
    case GROUP_CREATE:
      const local_state_group_create = {
        ...state,
        list: [...state.list, action.payload],
      }
      await API().SET_DATA(
        'setGroup',
        JSON.stringify(local_state_group_create.list)
      )
      return local_state_group_create
    case GROUP_REMOVE:
      const local_state_group_remove = {
        ...state,
        list: state.list.filter(group => group.key !== action.payload),
      }
      await API().SET_DATA(
        'setGroup',
        JSON.stringify(local_state_group_remove.list)
      )
      return local_state_group_remove
    case GROUP_ADD_ITEM:
      const key = action.group.key

      const index = state.list.findIndex(group => group.key === key)

      state.list[index] = {
        ...state.list[index],
        children: [...state.list[index].children, action.payload],
      }

      const local_state_group_add_item = { ...state, list: [...state.list] }

      await API().SET_DATA(
        'setGroup',
        JSON.stringify(local_state_group_add_item.list)
      )

      return local_state_group_add_item
    case GROUP_REMOVE_ITEM:
      const local_state_group_remove_item = {
        ...state,
        list: [
          ...state.list.map(group => {
            if (group.key === action.payload.parent_key) {
              return {
                ...group,
                children: group.children.filter(
                  note => note.key !== action.payload.child_key
                ),
              }
            }
            return group
          }),
        ],
      }
      await API().SET_DATA(
        'setGroup',
        JSON.stringify(local_state_group_remove_item.list)
      )
      return local_state_group_remove_item
    default:
      return state
  }
}
