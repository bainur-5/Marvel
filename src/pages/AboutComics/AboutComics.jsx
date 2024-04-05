import { useSelector } from "react-redux";
import cls from "./AboutComics.module.scss";
import { useGetComiscIDQuery } from "../../Services/comicsServices";
import { Loader } from "../../component/ui/load/Loader";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AboutComics = () => {
  const id = useSelector((state) => state.idSlice.comicsID);
  const { data, isLoading } = useGetComiscIDQuery({ comicsId: id });
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) {
      navigate("/comics");
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
                {data.series.name ? <p>{data.series.name}</p> : <p>No</p>}
              </div>
            </div>
            <div className={cls.section}>
              <p className={cls.title_section}>Characters</p>
              <div className={cls.section_name_container}>
                {data.characters.items.length > 0 ? (
                  data.characters.items.map((item, i) => (
                    <p key={i}>{item.name}</p>
                  ))
                ) : (
                  <p>NO</p>
                )}
              </div>
            </div>
            <div className={cls.section}>
              <p className={cls.title_section}>Stories</p>
              <div className={cls.section_name_container}>
                {data.stories.items.length > 0 ? (
                  data.stories.items.map((item, i) => (
                    <p key={i}>{item.name}</p>
                  ))
                ) : (
                  <p>NO</p>
                )}
              </div>
            </div>
          </div>
          <div className={cls.picture}>
            <img
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default AboutComics;
