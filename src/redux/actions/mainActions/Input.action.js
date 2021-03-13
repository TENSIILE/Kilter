import { CHANGE_INPUT, CLEAR_INPUT } from '../../types/mainTypes/input.type'

export const inputChangeAction = e => {
  return {
    type: CHANGE_INPUT,
    payload: e.target,
  }
}

export const inputClearAction = () => {
  return {
    type: CLEAR_INPUT,
  }
}
