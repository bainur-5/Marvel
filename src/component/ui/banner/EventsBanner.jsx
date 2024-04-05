import { useDispatch } from "react-redux";
import { useGetEventsAllQuery } from "../../../Services/eventsServices";
import EventsBannerCard from "../card/EventsBannerCard";
import cls from "./banner.module.scss";
import { useNavigate } from "react-router-dom";
import { eventID } from "../../../Redux/idSlice/idSlice";
const EventsBanner = () => {
  const { data } = useGetEventsAllQuery({ offset: 0, limit: 5 });
  const navigate = useNavigate();
  const disptach = useDispatch();

  const navigateEventID = (id) => {
    disptach(eventID(id));
    navigate("/event");
  };
  return (
    <div className={cls.borderTop}>
      <div className={cls.rootEvent}>
        <div className={cls.eventCards}>
          {data
            ? data.map((item, i) =>
                i % 2 ? (
                  <>
                    {EventsBannerCard({
                      id: item.id,
                      img: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                      name: item.name || item.title || item.firstName,
                      onClick: () => navigateEventID(item.id),
                    })}
                  </>
                ) : (
                  <>
                    {EventsBannerCard({
                      id: item.id,
                      img: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                      name: item.name || item.title || item.firstName,
                      onClick: () => navigateEventID(item.id),
                    })}
                  </>
                )
              )
            : ""}
        </div>
      </div>
    </div>
  );
};
export default EventsBanner;
