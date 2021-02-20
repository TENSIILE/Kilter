import { Tabs } from 'antd'
import { ListNotes } from '../../../../components'

export const Trash = () => {
    const { TabPane } = Tabs

    return (
        <Tabs 
            defaultActiveKey='1' 
            size='large'
            className='content__tabs'
        >
            <TabPane tab='Заметки' key='1'>
                <ListNotes.Tag className='trash'/>
            </TabPane>
            <TabPane tab='Теги' key='2'></TabPane>
        </Tabs>
    )
}