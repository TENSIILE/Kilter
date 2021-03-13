import { generateId } from '../../../utils/helpers'
import {
  GROUP_ADD_ITEM,
  GROUP_CREATE,
  GROUP_REMOVE,
  GROUP_REMOVE_ITEM,
} from '../../types/mainTypes/group.type'

export const groupCreateAction = title => {
  const id = generateId()
  return {
    type: GROUP_CREATE,
    payload: {
      key: id,
      title,
      children: [],
    },
  }
}

export const groupRemoveAction = id => {
  return {
    type: GROUP_REMOVE,
    payload: id,
  }
}

export const groupAddItemAction = (group, note) => {
  const id = generateId()
  return {
    type: GROUP_ADD_ITEM,
    payload: {
      key: id,
      id: note.id,
      title: note.title,
      link: `/note/${note.id}`,
      isLeaf: true,
    },
    group,
  }
}

export const groupRemoveItemAction = (parent_key, child_key) => {
  return {
    type: GROUP_REMOVE_ITEM,
    payload: {
      parent_key,
      child_key,
    },
  }
}
