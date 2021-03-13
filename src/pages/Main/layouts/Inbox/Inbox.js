import { useContext } from 'react'
import { Tabs } from 'antd'
import { ListNotes } from '../../../../components'
import { MainContext } from '../../../../contexts/main/mainContext'

export const Inbox = () => {
  const logic = useContext(MainContext)
  const { TabPane } = Tabs

  return (
    <Tabs defaultActiveKey='1' size='large' className='content__tabs'>
      <TabPane tab='Все' key='1'>
        <ListNotes
          list={logic.notes.filter(
            note => !note.isImportant && !note.isReminder
          )}
          onRemove={logic.onRemoveNoteHandler}
          onChangeChecked={logic.onNoteChangeCheckedHandler}
          onView={logic.onViewNoteFullHandler}
        />
      </TabPane>
      <TabPane tab='Важные' key='2'>
        <ListNotes
          list={logic.notes.filter(
            note => note.isImportant && !note.isReminder
          )}
          onRemove={logic.onRemoveNoteHandler}
          onChangeChecked={logic.onNoteChangeCheckedHandler}
          onView={logic.onViewNoteFullHandler}
        />
      </TabPane>
      <TabPane tab='Напоминания' key='3'>
        <ListNotes
          list={logic.notes.filter(note => note.isReminder)}
          onRemove={logic.onRemoveNoteHandler}
          onChangeChecked={logic.onNoteChangeCheckedHandler}
          onView={logic.onViewNoteFullHandler}
        />
      </TabPane>
    </Tabs>
  )
}
