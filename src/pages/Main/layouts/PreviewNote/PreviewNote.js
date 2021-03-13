import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import marked from 'marked'
import { LightenDarkenColor } from 'lighten-darken-color'
import { MainContext } from '../../../../contexts/main/mainContext'
import { RouteContext } from '../../../../contexts/routeContext'
import './PreviewNote.scss'

export const PreviewNote = () => {
  const logic = useContext(MainContext)
  const { setPass, setTitle } = useContext(RouteContext)

  const params = useParams()

  const [note, setNote] = useState(null)

  useEffect(() => {
    setNote(
      logic.notes.find(note => note.id.toString() === params.id.toString())
    )
    setPass(false)
  }, [params.id, logic.notes, setPass])

  useEffect(() => {
    note && setTitle(note.title)
  }, [note, setTitle])

  return (
    <div className='preview_note'>
      {!!note && (
        <>
          {!!note?.description && (
            <div
              className='preview_note__data'
              dangerouslySetInnerHTML={{ __html: marked(note?.description) }}
            />
          )}
          {!!note?.tags.length && (
            <ul className='preview_note__tags'>
              {note?.tags?.map((tag, i) => (
                <li
                  key={tag + i}
                  style={{
                    backgroundColor:
                      !!note?.status &&
                      LightenDarkenColor(note?.status?.color, 230),
                    color: note?.status?.color,
                  }}
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  )
}
