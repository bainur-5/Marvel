import { useGetCharacterIDQuery } from "../../../Services/characterServices";
import cls from "./banner.module.scss";
const CharacterBanner = ({ img }) => {
  const { data: character1 } = useGetCharacterIDQuery({ characterID: 1009351 });
  const { data: character2 } = useGetCharacterIDQuery({ characterID: 1009610 });
  const { data: character3 } = useGetCharacterIDQuery({ characterID: 1009368 });
  const { data: character4 } = useGetCharacterIDQuery({ characterID: 1009220 });
  const { data: character5 } = useGetCharacterIDQuery({ characterID: 1009282 });
  return (
    <>
      <div className={cls.character_cont}>
        {character1 && character2 && character3 && character4 && character5 ? (
          <>
            <div
              className={cls.character_card}
              style={{
                backgroundImage: `url(${character1.thumbnail.path}.${character1.thumbnail.extension})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className={cls.character_card}
              style={{
                backgroundImage: `url(${character2.thumbnail.path}.${character3.thumbnail.extension})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className={cls.character_card}
              style={{
                backgroundImage: `url(${character3.thumbnail.path}.${character3.thumbnail.extension})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className={cls.character_card}
              style={{
                backgroundImage: `url(${character4.thumbnail.path}.${character4.thumbnail.extension})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className={cls.character_card}
              style={{
                backgroundImage: `url(${character5.thumbnail.path}.${character5.thumbnail.extension})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default CharacterBanner;
