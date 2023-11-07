import Character from '../../ui/card/Character'
import cls from './mainCardsPages.module.scss'

const MainCardsPage = ({ data, name, nameClass, onClick }) => {
    return (
        <div className={cls.root}>
            <div className={cls.contText}>
                <button onClick={onClick}>
                    <p>
                        more {name}
                    </p>

                </button>
            </div>
            <div className={cls.contCards}>
                {data ?
                    data.map(item => Character({
                        id: item.id,
                        img: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                        name: item.name || item.title || item.firstName,
                        nameClass: nameClass
                    }))
                    : ''
                }
            </div>
        </div>
    )
}

export default MainCardsPage