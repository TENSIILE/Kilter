import { Tabs } from 'antd'
import { ListNotes } from '../../../../components'

export const Inbox = () => {
    const { TabPane } = Tabs

    return (
        <Tabs 
            defaultActiveKey='1' 
            size='large'
            className='content__tabs'
        >
            <TabPane tab='Все' key='1'>
                <ListNotes/>
            </TabPane>
            <TabPane tab='Важные' key='2'></TabPane>
            <TabPane tab='Напоминания' key='3'></TabPane>
        </Tabs>
    )
}