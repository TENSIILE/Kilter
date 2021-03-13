import { useContext } from 'react'
import { Input } from 'antd'
import { MainContext } from '../../../../contexts/main/mainContext'
import { ListNotes } from '../../../../components'
import { INPUT_STATUS_NAME } from '../../../../redux/types/mainTypes/input.type'
import '../layouts.scss'

export const Statuses = () => {
    const logic = useContext(MainContext)

    return (
        <div className="page_container">
            <Input 
                size='large' 
                placeholder='Введите новый статус'
                name={INPUT_STATUS_NAME}
                value={logic.inputs[INPUT_STATUS_NAME]}
                onChange={logic.onChangeInputHandler}
                onKeyDown={logic.onKeydownInputHandler}
            />
            <ListNotes.Tag.Status 
                list={logic.statuses.list}
                onRemoveStatus={logic.onRemoveStatusHandler}
                onSelectColor={logic.onSelectColorHandler}
            />
        </div>
    )
}