import config from '../config.json'

export const API = () => {
  const session = sessionStorage.getItem(config.SESSION_NAME)

  const userId = JSON.parse(session)?.userId
  const token = JSON.parse(session)?.token

  const returnRequestObject = (method = 'GET', body) => {
    return {
      method,
      body,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  }

  const GET_DATA = async link => {
    const response = await fetch(
      `${config.SERVER_HOST}/${link}?authorId=${userId}`,
      returnRequestObject()
    )
    const data = await response.json()

    const list = data[0]?.list

    if (list) {
      return JSON.parse(list)
    }
  }

  const SET_DATA = async (link, list) => {
    const body = JSON.stringify({ list, authorId: userId })

    return await (
      await fetch(
        `${config.SERVER_HOST}/${link}`,
        returnRequestObject('POST', body)
      )
    ).json()
  }

  const setNote = async (...args) => {
    const body = JSON.stringify({
      id: args[0],
      title: args[1],
      description: args[2],
      isImportant: args[3],
      status: JSON.stringify(args[4]),
      tags: JSON.stringify(args[5]),
      isReminder: args[6],
      checked: args[7],
      authorId: userId,
    })

    return await (
      await fetch(
        `${config.SERVER_HOST}/setNote`,
        returnRequestObject('POST', body)
      )
    ).json()
  }

  const getNote = async () => {
    return await (
      await fetch(
        `${config.SERVER_HOST}/getNotes?authorId=${userId}`,
        returnRequestObject()
      )
    ).json()
  }

  const removeNote = async id => {
    const body = JSON.stringify({ id, authorId: userId })

    return await (
      await fetch(
        `${config.SERVER_HOST}/removeNote`,
        returnRequestObject('POST', body)
      )
    ).json()
  }

  const checkedNote = async id => {
    const body = JSON.stringify({ id, authorId: userId })

    return await (
      await fetch(
        `${config.SERVER_HOST}/checkedNote`,
        returnRequestObject('POST', body)
      )
    ).json()
  }

  return {
    GET_DATA,
    SET_DATA,
    setNote,
    getNote,
    removeNote,
    checkedNote,
  }
}
