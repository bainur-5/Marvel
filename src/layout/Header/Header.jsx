import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/Logo.svg";
import cls from "./Header.module.scss";
import { ReactComponent as BurgerMenu } from "../../assets/icon/Menu Button.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={cls.border_bottom}>
      <div className={cls.root}>
        <button className={cls.burgerButton} onClick={toggleMenu}>
          <BurgerMenu />
        </button>
        <ol className={`${cls.list_logo}`}>
          <li>
            <NavLink className={cls.linkLogo} exact="true" to={"/home"}>
              <img src={Logo} alt="Logo" />
            </NavLink>
          </li>
        </ol>
        <ul className={`${cls.list_menu} ${isMenuOpen ? cls.open : ""}`}>
          <li>
            <NavLink className={cls.link}  exact="true" to={"/home"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={cls.link} exact="true" to={"/characters"}>
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink className={cls.link} to={"/comics"} exact="true">
              Comics
            </NavLink>
          </li>
          <li>
            <NavLink className={cls.link} to={"/events"} exact="true">
              Events
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
