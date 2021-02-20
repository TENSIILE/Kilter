import { Input } from 'antd'
import { ListNotes } from '../../../../components'
import '../layouts.scss'

export const Statuses = () => {
    return (
        <div className="page-container">
            <Input size='large' placeholder='Введите новый статус'/>
            <ListNotes.Tag.Status/>
        </div>
    )
}