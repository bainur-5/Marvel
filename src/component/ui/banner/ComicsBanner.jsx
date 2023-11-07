import { useGetComicsAllQuery } from '../../../Services/comicsServices'
import cls from './banner.module.scss'

const ComicsBanner = () => {
    const { data } = useGetComicsAllQuery({ offset: 0, limit: 5 })

    return (
        <div className={cls.rootComics}>
            <div className={cls.cont_comics_text}>
                <div className={cls.logo_comics}>
                    <img src="Marvel_Logo.svg.png" alt="Marvel" />
                </div>
                <div className={cls.text_comics}>
                    <p>New Marvel Comics</p>
                </div>
            </div>
            <div className={cls.cont_comics}>
                <div className={cls.cont_card_comics}>
                    {
                        data ?
                            data.map((item, i) => (
                                <div className={cls.card_cmics} style={{ 
                                    zIndex: data.length - i - 1, 
                                    backgroundImage: `url(${item.thumbnail.path}.${item.thumbnail.extension})`, 
                                    backgroundPosition: 'center', 
                                    backgroundSize: 'cover', 
                                    backgroundRepeat: 'no-repeat',
                                     }}>
                                </div>
                            ))
                            : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default ComicsBanner;
