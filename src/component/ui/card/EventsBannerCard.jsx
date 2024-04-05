import cls from './card.module.scss'
const EventsBannerCard = ({ name, img, id, onClick }) => {

    return (
        <div className={cls.eventsCard} key={id} onClick={onClick}>
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