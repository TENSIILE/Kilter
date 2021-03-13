import { useContext } from 'react'
import { Input } from 'antd'
import { ListNotes } from '../../../../components'
import { MainContext } from '../../../../contexts/main/mainContext'
import { INPUT_TAG_NAME } from '../../../../redux/types/mainTypes/input.type'
import '../layouts.scss'

export const Tags = () => {
    const logic = useContext(MainContext)

    return (
        <div className="page_container">
            <Input 
                size='large' 
                placeholder='Введите новый тег' 
                name={INPUT_TAG_NAME}
                value={logic.inputs[INPUT_TAG_NAME]}
                onChange={logic.onChangeInputHandler}
                onKeyDown={logic.onKeydownInputHandler}
            />
            <ListNotes.Tag 
                list={logic.tags.list}
                onRemove={logic.onRemoveTagHandler}
            />
        </div>
    )
}