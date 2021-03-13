import { CHANGE_INPUT } from '../types/authInput.type'

export const authInputChangeAction = e => {
  return {
    type: CHANGE_INPUT,
    payload: e.target,
  }
}
