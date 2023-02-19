import { IoSettingsSharp } from "react-icons/io5";
import css from './Settings.module.css';
import {useState} from "react";

const Settings = () => {

    const [active,setActive] = useState(false);

    return (
        <div className={css.settings}>
            <div className={css.settings__icon} onClick={()=>setActive(prevState => !prevState)}><IoSettingsSharp/></div>
            <div className={active ? css.settings__content_active : css.settings__content}></div>
        </div>
    );
}

export {Settings};