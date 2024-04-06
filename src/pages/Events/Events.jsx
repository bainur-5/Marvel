import { useState } from "react";
import Character from "../../component/ui/card/Character";
import Search from "../../component/ui/search/Search";
import cls from "./Characters.module.scss";
import { useGetEventsAllQuery } from "../../Services/eventsServices";
import { Loader } from "../../component/ui/load/Loader";
import { ReactComponent as VectorIcon } from "../../assets/icon/Vector.svg";
import { ReactComponent as NextIcon } from "../../assets/icon/Next.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { eventID } from "../../Redux/idSlice/idSlice";
const Events = () => {
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const disptach = useDispatch();
  const queryParameters = {
    offset: offset,
  };
  if (search !== "") {
    queryParameters.searchString = search;
    queryParameters.limit = 100;
    queryParameters.offset = 0
  }
  const { data } = useGetEventsAllQuery(queryParameters);
  const onSearch = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setSearch(value);
    } else {
      setSearch(""); // Очистить поиск, если поле пустое
    }
  };
  const NavigateEventID = (id) => {
    disptach(eventID(id));
    navigate("/event");
  };
  const handlePrevClick = () => {
    if (offset > 0) {
      setOffset(offset - 20);
    }
  };
  const handleNextClick = () => {
    setOffset(offset + 20);
  };

  return (
    <div className={cls.root}>
      <div className={cls.search}>
        <Search onChange={(e) => onSearch(e)} />
      </div>
      <div className={cls.contCards}>
        {data ? (
          data.map((item) =>
            Character({
              id: item.id,
              img: `${item.thumbnail.path}.${item.thumbnail.extension}`,
              name: item.name || item.title || item.firstName,
              nameClass: "events_card",
              onClick: () => NavigateEventID(item.id),
            })
          )
        ) : (
          <Loader />
        )}
      </div>
      <div className={cls.pacination_part}>
        <button onClick={handlePrevClick} className={cls.btn_prev}>
          <VectorIcon className={cls.icon} />
        </button>
        <p>{offset / 20 + 1}</p>
        <button onClick={handleNextClick} className={cls.btn_next}>
          <NextIcon className={cls.icon} />
        </button>
      </div>
    </div>
  );
};
export default Events;
