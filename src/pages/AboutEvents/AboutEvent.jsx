import { useSelector } from "react-redux";
import cls from "./AboutEvent.module.scss";
import { Loader } from "../../component/ui/load/Loader";
import { useGetEventsIDCardQuery } from "../../Services/eventsServices";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AboutEvent = () => {
  const id = useSelector((state) => state.idSlice.eventID);
  const { data, isLoading } = useGetEventsIDCardQuery({ eventsID: id });
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) {
      navigate("/events");
    }
  }, []);
  return (
    <div className={cls.root}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={cls.content}>
          <div className={cls.about}>
            <p className={cls.name}>{data.title}</p>
            <p className={cls.description}>{data.description}</p>
            <div className={cls.section}>
              <p className={cls.title_section}>Series</p>
              <div className={cls.section_name_container}>
                {data.series.items.length > 0 ? (
                  data.series.items.map((item) => <p>{item.name}</p>)
                ) : (
                  <p>NO</p>
                )}
              </div>
            </div>
            <div className={cls.section}>
              <p className={cls.title_section}>Characters</p>
              <div className={cls.section_name_container}>
                {data.characters.items.length > 0 ? (
                  data.characters.items.map((item) => <p>{item.name}</p>)
                ) : (
                  <p>NO</p>
                )}
              </div>
            </div>
            <div className={cls.section}>
              <p className={cls.title_section}>Stories</p>
              <div className={cls.section_name_container}>
                {data.stories.items.length > 0 ? (
                  data.stories.items.map((item) => <p>{item.name}</p>)
                ) : (
                  <p>NO</p>
                )}
              </div>
            </div>
          </div>
          <div className={cls.picture}>
            <img
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt="art"
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default AboutEvent;
