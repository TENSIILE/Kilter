import { generateId } from '../../../utils/helpers'
import { TAG_CREATE, TAG_REMOVE } from '../../types/mainTypes/tags.type'

export const tagCreateAction = title => {
  const id = generateId()
  return {
    type: TAG_CREATE,
    payload: {
      id,
      title,
    },
  }
}

export const tagRemoveAction = id => {
  return {
    type: TAG_REMOVE,
    payload: id,
  }
}
