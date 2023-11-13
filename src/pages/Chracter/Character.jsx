import { useSelector } from 'react-redux'
import { useGetCharacterIDQuery } from '../../Services/characterServices'
import cls from './Character.module.scss'
const Character = () => {
    const id = useSelector(state => state.idSlice.characterID);
    const { data, isLoading } = useGetCharacterIDQuery({ characterID: id })
    return (
        <div className={cls.root}>
            {isLoading
                ? <p>loading</p>
                :
                <div className={cls.content}>
                    <div className={cls.about}>
                        <p className={cls.name}>{data.name}</p>
                        <p className={cls.description}>{data.description}</p>
                        <div className={cls.section}>
                            <p className={cls.title_section}>Comics</p>
                            <div className={cls.section_name_container}>
                                {data.comics.items.map(item => <p>{item.name}</p>)}
                            </div>
                        </div>
                        <div className={cls.section}>
                            <p className={cls.title_section}>Events</p>
                            <div className={cls.section_name_container}>
                                {data.events.items.map(item => <p>{item.name}</p>)}
                            </div>
                        </div>
                    </div>
                    <div className={cls.picture}>
                        <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt="" />
                    </div>
                </div>
            }
        </div>
    )
}
export default Character