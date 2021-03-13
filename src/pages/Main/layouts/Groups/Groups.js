import { useContext } from 'react'
import { Input, Tree, Tabs, Select, Button } from 'antd'
import { MainContext } from '../../../../contexts/main/mainContext'
import { INPUT_GROUP_NAME } from '../../../../redux/types/mainTypes/input.type'
import '../layouts.scss'

export const Groups = () => {
    const logic = useContext(MainContext)

    const { DirectoryTree } = Tree
    const { TabPane }       = Tabs
    const { Option }        = Select

    return (
        <div className="page_container">
            <div className="group_container"> 
                <Tabs 
                    defaultActiveKey='1' 
                    size='large'
                    className='content__tabs'
                >
                    <TabPane 
                        tab='Списки групп' 
                        key='1'
                    >
                        <div className="group_container__input_group">
                            <Input 
                                size='large' 
                                placeholder='Введите название новой группы'
                                name={INPUT_GROUP_NAME}
                                value={logic.inputs[INPUT_GROUP_NAME]}
                                onChange={logic.onChangeInputHandler}
                                onKeyDown={logic.onKeydownInputHandler}
                            />
                            <Button 
                                type='primary' 
                                danger 
                                size='large'
                                disabled={!logic.tree}
                                onClick={logic.onRemoveGroupHandler}
                            >
                                Удалить группу
                            </Button>
                        </div>
                        <DirectoryTree 
                            treeData={logic.groups.list}
                            onSelect={logic.onSelectDirHandler}
                        />
                    </TabPane>
                    <TabPane 
                        tab='Добавление заметки в группу' 
                        key='2'
                    >
                        <div className="group_container__added_note">
                            <div className="group_container__select">
                                <Select 
                                    placeholder='Выберите группу'
                                    onSelect={logic.onSelectInGroupChangeGroupHandler}
                                    value={logic.noteSettings.group?.title}
                                >
                                    {
                                        logic.groups.list.map(group => (
                                            <Option 
                                                key={group.key} 
                                                value={JSON.stringify(group)}
                                            >
                                                {group.title}
                                            </Option>
                                        ))
                                    }
                                </Select>
                                <Select
                                    placeholder='Выберите заметку'
                                    onSelect={logic.onSelectInGroupChangeNoteHandler}
                                    value={logic.noteSettings.note?.title}
                                >
                                    {
                                        !!logic.notes.length && logic.notes.map(note => (
                                            <Option 
                                                key={note.id} 
                                                value={JSON.stringify(note)}
                                            >
                                                {note.title}
                                            </Option>
                                        ))
                                    }
                                </Select>
                            </div>
                            <Button 
                                type='primary' 
                                size='large'
                                onClick={logic.onAddItemToGroupHandler}
                            >
                                Добавить
                            </Button>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}