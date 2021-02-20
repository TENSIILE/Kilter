import { CHANGE_INPUT } from '../types/authInput.type'

export const AuthInputReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {...state, [action.payload.name]: action.payload.value}
        default:
            return state
    }
}