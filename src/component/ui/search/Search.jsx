import cls from "./Search.module.scss";
const Search = ({ onChange }) => {
  return (
    <div className={cls.root}>
      <input
        type="text"
        placeholder="Search"
        onChange={onChange}
        className={cls.search}
      />
    </div>
  );
};
export default Search;
