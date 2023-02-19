import {Outlet} from "react-router-dom";

import {Footer, Header} from "../components";
import css from './Layout.module.css';


const Layout = () => {
    return (
        <>
            <Header/>
            <div className={css.content}>
                    <Outlet/>
            </div>
            <Footer/>
        </>
    );
};


export {Layout};