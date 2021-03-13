import { ALERT_HIDE, ALERT_SHOW } from '../types/alert.type'

export const alertActionHide = () => {
  return {
    type: ALERT_HIDE,
  }
}

export const alertActionShow = payload => {
  return {
    type: ALERT_SHOW,
    payload,
  }
}
