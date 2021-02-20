import { Input } from 'antd'
import { ListNotes } from '../../../../components'
import '../layouts.scss'

export const Tags = () => {
    return (
        <div className="page-container">
            <Input size='large' placeholder='Введите новый тег'/>
            <ListNotes.Tag className='tags'/>
        </div>
    )
}