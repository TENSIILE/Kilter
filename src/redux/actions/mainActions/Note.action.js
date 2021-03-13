import { generateId } from '../../../utils/helpers'

import {
  NOTE_CREATE,
  NOTE_REMOVE,
  NOTE_CHECKED,
  NOTE_CHANGE_INIT,
  NOTE_CHANGE_IMPORTANT,
  NOTE_CHANGE_TAGS,
  NOTE_CHANGE_STATUS,
  NOTE_CHANGE_REMINDER,
  NOTE_SELECT_GROUP,
  NOTE_SELECT_NOTE,
  NOTE_VIEW_NOTE,
} from '../../types/mainTypes/note.type'

export const noteNewCreateAction = (
  title,
  description,
  isImportant = false,
  status = null,
  tags = [],
  isReminder = false,
  userId
) => {
  const id = generateId()

  return {
    type: NOTE_CREATE,
    payload: {
      id,
      title,
      description,
      isImportant,
      status,
      tags,
      isReminder,
      checked: false,
      authorId: userId,
    },
  }
}

export const noteCurrentRemoveAction = id => {
  return {
    type: NOTE_REMOVE,
    payload: id,
  }
}

export const noteChangeCheckedAction = id => {
  return {
    type: NOTE_CHECKED,
    payload: id,
  }
}

// Экшены для настройки

export const noteSettingsInitAction = () => {
  return {
    type: NOTE_CHANGE_INIT,
  }
}

export const noteSettingsImportantAction = () => {
  return {
    type: NOTE_CHANGE_IMPORTANT,
  }
}

export const noteSettingsReminderAction = () => {
  return {
    type: NOTE_CHANGE_REMINDER,
  }
}

export const noteSettingsStatusAction = status => {
  return {
    type: NOTE_CHANGE_STATUS,
    payload: status,
  }
}

export const noteSettingsTagAction = tags => {
  return {
    type: NOTE_CHANGE_TAGS,
    payload: tags,
  }
}

export const noteSettingsSetNoteAction = note => {
  return {
    type: NOTE_SELECT_NOTE,
    payload: note,
  }
}

export const noteSettingsSetGroupAction = group => {
  return {
    type: NOTE_SELECT_GROUP,
    payload: group,
  }
}

export const noteSettingsSetViewAction = isView => {
  return {
    type: NOTE_VIEW_NOTE,
    payload: isView,
  }
}
