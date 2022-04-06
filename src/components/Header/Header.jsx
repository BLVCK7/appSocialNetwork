import s from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.loginLogout}>
                        <div className={s.userName}>{props.login}</div>
                        <button onClick={props.logout}>Log Out</button>
                    </div>
                    : <button><NavLink to={'/login'} className={s.loginNavLink}>Login</NavLink></button>}
            </div>
        </header>
    )
}

export default Header;