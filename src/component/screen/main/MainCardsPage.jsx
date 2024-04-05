import { useDispatch } from "react-redux";
import Character from "../../ui/card/Character";
import cls from "./mainCardsPages.module.scss";
import { characterID, comicsID, eventID } from "../../../Redux/idSlice/idSlice";
import { useNavigate } from "react-router-dom";

const MainCardsPage = ({ data, name, nameClass, onClick, cardClick }) => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  
  const handleCardClick = async (id) => {
    if (name === "characters") {
      await disptach(characterID(id));
      navigate("/personcharacter");
    }
    if (name === "comics") {
      await disptach(comicsID(id));
      navigate("/comic");
    }
    if (name === "events") {
      await disptach(eventID(id));
      navigate("/event");
    }
  };
  return (
    <div className={cls.root}>
      <div className={cls.contText}>
        <button onClick={onClick}>
          <p>more {name}</p>
        </button>
      </div>
      <div className={cls.contCards}>
        {data
          ? data.map((item) =>
              Character({
                id: item.id,
                img: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                name: item.name || item.title || item.firstName,
                nameClass: nameClass,
                onClick: () => handleCardClick(item.id),
              })
            )
          : ""}
      </div>
    </div>
  );
};

export default MainCardsPage;
