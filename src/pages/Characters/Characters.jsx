import { useState } from "react";
import { useGetCharacterAllQuery } from "../../Services/characterServices";
import Character from "../../component/ui/card/Character";
import Search from "../../component/ui/search/Search";
import cls from "./Characters.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { characterID } from "../../Redux/idSlice/idSlice";
const Characters = () => {
  const navigate = useNavigate();
  const disptach = useDispatch();
  let offset = 0;
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
  const click = (id) => {
    disptach(characterID(id));
    navigate("/personcharacter");
  };
  console.log(offset);
  return (
    <div className={cls.root}>
      <div className={cls.search}>
        <Search onChange={(e) => onSearch(e)} />
      </div>
      <div className={cls.contCards}>
        {data
          ? data.map((item) => (
              <Character
                id={item.id}
                img={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                name={item.name || item.title || item.firstName}
                nameClass="character_card"
                onClick={() => click(item.id)}
              />
            ))
          : ""}
      </div>
      <div>
        <button onClick={() => offset + 20}>prev</button>
        <button onClick={() => (offset > 0 ? offset - 20 : "")}>next</button>
      </div>
    </div>
  );
};
export default Characters;
