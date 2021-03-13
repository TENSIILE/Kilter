import { TRASH_DELETE_NOTE, TRASH_DELETE_TAG, TRASH_ADD_NOTE, TRASH_ADD_TAG } from '../../types/mainTypes/trash.type'

export const trashAddNoteAction = (note) => {
    return {
        type: TRASH_ADD_NOTE,
        payload: note
    }
}

export const trashAddTagAction = (tag) => {
    return {
        type: TRASH_ADD_TAG,
        payload: tag
    }
}

export const trashDeleteNoteAction = (id) => {
    return {
        type: TRASH_DELETE_NOTE,
        payload: id
    }
}

export const trashDeleteTagAction = (id) => {
    return {
        type: TRASH_DELETE_TAG,
        payload: id
    }
}