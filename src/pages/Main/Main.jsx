import cls from "./MainStyle.module.scss";
import { useGetCharacterAllQuery } from "../../Services/characterServices";
import CharacterBanner from "../../component/ui/banner/CharactersBanner";
import ComicsBanner from "../../component/ui/banner/ComicsBanner";
import { useGetEventsAllQuery } from "../../Services/eventsServices";
import EventsBanner from "../../component/ui/banner/EventsBanner";
import MainCardsPage from "../../component/screen/main/MainCardsPage";
import { useGetComicsAllQuery } from "../../Services/comicsServices";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const { data } = useGetCharacterAllQuery({ offset: "0", limit: 10 });
  const { data: events } = useGetEventsAllQuery({ offset: "0", limit: 10 });
  const { data: comics } = useGetComicsAllQuery({ offset: "0", limit: 10 });
  const navigate = useNavigate();
  return (
    <div className={cls.root}>
      <CharacterBanner />
      <MainCardsPage
        data={data}
        name={"characters"}
        nameClass={"character_card"}
        onClick={() => navigate("/characters")}
      />
      <ComicsBanner />
      <MainCardsPage
        data={comics}
        name={"comics"}
        nameClass={"comics_card"}
        onClick={() => navigate("/comics")}
      />
      <EventsBanner />
      <MainCardsPage
        data={events}
        name={"events"}
        nameClass={"events_card"}
        onClick={() => navigate("/events")}
      />
    </div>
  );
};
export default Main;
