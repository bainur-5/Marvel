import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/Logo.svg";
import cls from "./Header.module.scss";

const Header = () => {
  return (
    <div className={cls.root}>
      <ol className={cls.list}>
        <li>
          <NavLink className={cls.linkLogo} to={"/home"}>
            <img src={Logo} alt="Logo" />
          </NavLink>
        </li>
      </ol>
      <ul className={cls.list}>
        <li>
          <NavLink className={cls.link} exact to={"/home"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={cls.link} to={"/characters"}>
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink className={cls.link} to={"/comics"}>
            Comics
          </NavLink>
        </li>
        <li>
          <NavLink className={cls.link} to={"/events"}>
            Events
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
