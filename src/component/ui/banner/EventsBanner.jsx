import { useGetEventsAllQuery } from '../../../Services/eventsServices'
import EventsBannerCard from '../card/EventsBannerCard'
import cls from './banner.module.scss'
const EventsBanner = () => {
    const { data } = useGetEventsAllQuery({ offset: 0, limit: 5 })
    return (
        <div className={cls.rootEvent}>
            <div className={cls.eventCards}>
                {data ? data.map((item, i) => i % 2 ? <div className={cls.eventCardsTop}>
                    {
                        EventsBannerCard({
                            id: item.id,
                            img: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                            name: item.name || item.title || item.firstName
                    })}
                </div>
                    : <div className={cls.eventCardsBottom}>
                        {EventsBannerCard({
                            id: item.id,
                            img: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                            name: item.name || item.title || item.firstName
                        })}
                    </div>) : ''}
            </div>
        </div>
    )
}
export default EventsBanner