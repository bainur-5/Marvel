import { useState } from "react";
import { useGetCharacterAllQuery } from "../../Services/characterServices";
import Character from "../../component/ui/card/Character";
import Search from "../../component/ui/search/Search";
import cls from "./Characters.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { characterID } from "../../Redux/idSlice/idSlice";
import { ReactComponent as VectorIcon } from "../../assets/icon/Vector.svg";
import { ReactComponent as NextIcon } from "../../assets/icon/Next.svg";
import { Loader } from "../../component/ui/load/Loader";
const Characters = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const [offset, setOffset] = useState(140);
  const [search, setSearch] = useState("");

  const queryParameters = {
    offset: offset,
  };
  if (search !== "") {
    queryParameters.searchString = search;
  }
  const { data } = useGetCharacterAllQuery(queryParameters);
  const onSearch = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setSearch(value);
    } else {
      setSearch(""); // Очистить поиск, если поле пустое
    }
  };
  const handleCharacterClick = (id) => {
    disptach(characterID(id));
    navigate("/personcharacter");
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
          data.map((item) => (
            <Character
              id={item.id}
              img={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              name={item.name || item.title || item.firstName}
              nameClass="character_card"
              onClick={() => handleCharacterClick(item.id)}
            />
          ))
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
export default Characters;
