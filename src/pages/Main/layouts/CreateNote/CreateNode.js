import { Button } from 'antd'
import { Input } from '../../../../components'
import './CreateNode.scss'

export const CreateNode = () => {
    return (
        <div className='create-note'>
            <div className="inputs-text">
                <Input placeholder='Название новой заметки...'/>
                <Input.Textarea placeholder='Описание заметки...'/>
            </div>
            <div className="btn-actions">
                <Button size='large' type='default'>Создать</Button>
                <Button size='large' danger>Превью</Button>
            </div>
        </div>
    )
}