import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../../../contexts/main/mainContext'
import { ReactComponent as Threeline } from '../../../../static/icons/menu-of-three-lines.svg'
import { ReactComponent as CloseSvg } from '../../../../static/icons/close.svg'
import './Groups.scss'

export const Groups = () => {
    const logic = useContext(MainContext)

    return (
        <div className="groups">
            {
                !!logic.groups.list.length && (
                    logic.groups.list.map(group => (
                        <div className="groups__section" key={group.key}>
                            <h4 className='groups__section-title'>{group.title}</h4>
                            <div className="groups__item">
                                {
                                    !!group.children.length && (
                                        group.children.map(group_child => (
                                            <Link className='groups__link' to={`${group_child.link}`} key={group_child.key}>
                                                <div className="groups__link_content">
                                                    <Threeline/>
                                                    <p>{group_child.title}</p>
                                                </div>
                                                <CloseSvg 
                                                    className='groups__close_svg'
                                                    onClick={(e) => logic.onRemoveItemFromGroupHandler(e, group.key, group_child.key)}
                                                />
                                            </Link>
                                        ))
                                        
                                    )
                                }
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}