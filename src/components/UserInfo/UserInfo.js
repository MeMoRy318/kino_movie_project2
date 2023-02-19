import {useNavigate} from "react-router-dom";
import {FaUserCircle} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";

import css from './UserInfo.module.css';
import {authAction} from "../../redux/slices";


const UserInfo = () => {


    const navigate = useNavigate();
    const {user,isLogin} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    return (
        <div className={css.userInfo}>
            {
                isLogin ?
                    <div className={css.userInfo__row}>
                    <div className={css.userInfo__login} onClick={()=>dispatch(authAction.outUser())}>Exit</div>
                        <div className={css.userInfo__icon}>
                            <FaUserCircle/>
                            <div className={isLogin ? css.userInfo__content : css.userInfo__content_visibility}>
                                <div>email {user?.email}</div>
                                <div>Name {user?.name}</div>
                                <div>SurName {user?.surname}</div>
                                <div>login time {user?.loginTime}</div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={css.userInfo__row}>
                        <div onClick={()=>navigate('/login')} className={css.userInfo__login}>Login</div>
                    </div>
            }

        </div>
    );
};

export {UserInfo};