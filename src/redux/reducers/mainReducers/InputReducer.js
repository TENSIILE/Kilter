import { CHANGE_INPUT, CLEAR_INPUT } from '../../types/mainTypes/input.type'

export const InputReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, [action.payload.name]: action.payload.value }
    case CLEAR_INPUT:
      const localState = {}

      for (let s in state) localState[s] = ''

      return localState
    default:
      return state
  }
}
