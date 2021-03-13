import { generateId } from '../../../utils/helpers'
import {
  STATUS_CREATE,
  STATUS_REMOVE,
  STATUS_SELECT_COLOR,
} from '../../types/mainTypes/statuses.type'

export const statusCreateAction = title => {
  const id = generateId()
  return {
    type: STATUS_CREATE,
    payload: {
      id,
      title,
      color: null,
    },
  }
}

export const statusRemoveAction = id => {
  return {
    type: STATUS_REMOVE,
    payload: id,
  }
}

export const statusSelectColorAction = (e, id) => {
  return {
    type: STATUS_SELECT_COLOR,
    payload: {
      e,
      id,
    },
  }
}
