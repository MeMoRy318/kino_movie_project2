import {useNavigate} from "react-router-dom";

import css from './Header.module.css';
import {Settings} from "../settings/Settings";
import {SearchForm} from "../SearchForm/SearchForm";
import {BurgerMenu} from "../BurgerMenu/BurgerMenu";
import {UserInfo} from "../UserInfo/UserInfo";


const Header = () => {

    let navigate = useNavigate();

    return (
        <div className={css.header}>
            <div className={css.header__row}>
                <div className={css.header__logo} onClick={() => navigate('/')}><span>kino</span><span
                    className={css.header__logo_blue}>movie</span></div>
                <BurgerMenu/>
                <SearchForm/>
                <div className={css.header__settings}>
                    <UserInfo/>
                    <Settings/>
                </div>
            </div>
        </div>
    );
};

export {Header};