import { Input, Tree } from 'antd'
import '../layouts.scss'

export const Groups = () => {
    const { DirectoryTree } = Tree

    const tree = [
        {
            title: 'Книги',
            key: '0',
            children: [
                {
                    title: 'Книга 1',
                    key: '0-1',
                    isLeaf: true,
                },
                {
                    title: 'Книга 2',
                    key: '0-2',
                    isLeaf: true,
                },
            ]
        },
        {
            title: 'Новости',
            key: '1',
            children: [
                {
                    title: 'Новость 1',
                    key: '1-1',
                    isLeaf: true,
                },
                {
                    title: 'Новость 2',
                    key: '1-2',
                    isLeaf: true,
                },
            ]
        },
    ]


    return (
        <div className="page-container">
            <Input size='large' placeholder='Введите название новой группы'/>
            <DirectoryTree treeData={tree}/>
        </div>
    )
}