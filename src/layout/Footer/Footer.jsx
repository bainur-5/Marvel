import cls from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icon/Logo.svg";
import { ReactComponent as GitIcon } from "../../assets/icon/git.svg";
import { ReactComponent as GmailIcon } from "../../assets/icon/gmail.svg";
import { ReactComponent as TelegramIcon } from "../../assets/icon/telegram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icon/linkedin.svg";

const Footer = () => {
  return (
    <div className={cls.borderTop}>
      <div className={cls.root}>
        <div className={cls.navigate_cont}>
          <NavLink className={cls.link} exact="true" to={"/home"}>
            <Logo />
          </NavLink>
          <ul className={cls.list}>
            <li>
              <NavLink className={cls.link} exact="true" to={"/home"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={cls.link} exact="true" to={"/characters"}>
                Characters
              </NavLink>
            </li>
            <li>
              <NavLink className={cls.link} exact="true" to={"/comics"}>
                Comics
              </NavLink>
            </li>
            <li>
              <NavLink className={cls.link} exact="true" to={"/events"}>
                Events
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={cls.contact_container}>
          <p>My contact:</p>
          <ul>
            <li>
              <Link to="https://github.com/bainur-5" exact="true">
                <GitIcon className={cls.contact_icon} />
              </Link>
            </li>
            <li>
              <Link to="https://t.me/BainurAB" exact="true">
                <TelegramIcon className={cls.contact_icon} />
              </Link>
            </li>
            <li>
              <Link to="https://bainur05ab@gmail.com" exact="true">
                <GmailIcon className={cls.contact_icon} />
              </Link>
            </li>
            <li>
              <Link
                exact="true"
                to="https://www.linkedin.com/in/bainur-absamatov-836746280?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BiyD05dRRtqNHaDGsU8PtA%3D%3D"
              >
                <LinkedinIcon className={cls.contact_icon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
