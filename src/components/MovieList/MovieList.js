import css from './MovieList.module.css';
import {useNavigate} from "react-router-dom";


const MovieList = ({movie}) => {

    const navigate = useNavigate();

    const {id,img,rating,release,title} = movie;

    return (
        <div className={css.movie}>
            <div className={css.movie__colom}>
                <div onClick={()=>navigate(`/movieInfo/${id}`)}>
                    <div className={css.movie__bg}>
                        <img src={img} alt={title} className={css.movie__img}/>
                        <span className={css.movie__rating}>{rating}</span>
                    </div>
                </div>
                <div className={css.movie__title}>{title}</div>
                <div className={css.movie__release}>{release}, Movie</div>
            </div>
        </div>
    );
};

export {MovieList};