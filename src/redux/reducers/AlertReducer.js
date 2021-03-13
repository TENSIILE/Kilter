import { ALERT_HIDE, ALERT_SHOW } from '../types/alert.type'

export const AlertReducer = (state, action) => {
    switch (action.type) {
        case ALERT_SHOW:
            return {...state, isVisible: true, ...action.payload}
        case ALERT_HIDE:
            return {...state, isVisible: false, ...action.payload}
        default:
            return state
    }
}