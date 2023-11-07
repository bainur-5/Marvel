import { NavLink } from 'react-router-dom';
import cls from './Header.module.scss';

const Header = () => {
    return (
        <div className={cls.root}>
            <ol className={cls.list}>
                <li>
                    <NavLink
                        className={cls.linkLogo}
                        to={'/'}
                    >
                        <img src="Marvel_Logo.svg.png" alt="Logo" />
                    </NavLink>
                </li>
            </ol>
            <ul className={cls.list}>
                <li>
                    <NavLink
                        className={cls.link}
                        to={`/`}
                    >
                        Home
                    </NavLink>
                </li>                
                <li>
                    <NavLink
                        className={cls.link}
                        to={`/characters`}
                    >
                        Characters
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={cls.link}
                        to={`/comics`}
                    >
                        Comics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={cls.link}
                        to={`/events`}
                    >
                        Events
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;
