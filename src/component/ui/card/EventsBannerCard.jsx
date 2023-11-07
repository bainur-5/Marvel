import cls from './card.module.scss'
const EventsBannerCard = ({ name, img, id }) => {

    return (
        <div className={cls.eventsCard} key={id}>
            <div className={cls.character_img}
                style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            >
            </div>
            <p className={cls.character_title}>
                {name}
            </p>
        </div>

    )
}
export default EventsBannerCard