import { useContext } from 'react'
import { Tabs } from 'antd'
import { ListNotes } from '../../../../components'
import { MainContext } from '../../../../contexts/main/mainContext'

export const Trash = () => {
    const logic       = useContext(MainContext)
    const { TabPane } = Tabs

    return (
        <Tabs 
            defaultActiveKey='1' 
            size='large'
            className='content__tabs'
        >
            <TabPane tab='Заметки' key='1'>
                <ListNotes.Tag
                  list={logic.trash.list[0]}
                  onRemove={logic.onRemoveCurrentNoteTrashHandler}
                />
            </TabPane>
            <TabPane tab='Теги' key='2'>
                <ListNotes.Tag
                  list={logic.trash.list[1]}
                  onRemove={logic.onRemoveCurrentTagTrashHandler}
                />
            </TabPane>
        </Tabs>
    )
}