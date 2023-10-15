import { NavLink } from 'react-router-dom'
import cls from './Header.module.scss'
const Header = () => {
    return (
        <div className={cls.root}>
            <ol className={cls.list}>
                <li>
                    <NavLink
                        className={cls.linkLogo}
                    >Marvel
                    </NavLink>
                    </li>
            </ol>
            <ul className={cls.list}>
                <li>
                    <NavLink
                        className={cls.link}
                    >
                        Characters
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={cls.link}
                    >
                        Comics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={cls.link}
                    >
                        Creators
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={cls.link}
                    >
                        Events
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={cls.link}
                    >
                        Series
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={cls.link}
                    >
                        Stories
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Header