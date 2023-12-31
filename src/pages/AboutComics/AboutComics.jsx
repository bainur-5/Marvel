import { useSelector } from 'react-redux'
import cls from './AboutComics.module.scss'
import { useGetComiscIDQuery } from '../../Services/comicsServices';
const AboutComics = () => {
    const id = useSelector(state => state.idSlice.comicsID);
    const { data, isLoading } = useGetComiscIDQuery({ comicsId: id })
    console.log(data);
    return (
        <div className={cls.root}>
            {isLoading
                ? <p>loading</p>
                :
                <div className={cls.content}>
                    <div className={cls.about}>
                        <p className={cls.name}>{data.title}</p>
                        <p className={cls.description}>{data.description}</p>
                        <div className={cls.section}>
                            <p className={cls.title_section}>Series</p>
                            <div className={cls.section_name_container}>
                                <p>{data.series.name}</p>
                            </div>
                        </div>
                        <div className={cls.section}>
                            <p className={cls.title_section}>Characters</p>
                            <div className={cls.section_name_container}>
                                {data.characters.items.map(item => <p>{item.name}</p>)}
                            </div>
                        </div>
                        <div className={cls.section}>
                            <p className={cls.title_section}>Stories</p>
                            <div className={cls.section_name_container}>
                                {data.stories.items.map(item => <p>{item.name}</p>)}
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
export default AboutComics