import css from './MovieInfo.module.css';
import {FaRegPlayCircle,FaHeart} from "react-icons/fa";


const MovieInfo = ({movie}) => {
    const {body,budget,genres,id,img,language,release_date,retying,runtime,title,companies} = movie;
    return (
        <div className={css.movieInfo}>

            <div className={css.movieInfo__row}>

                <div className={css.movieInfo__img}>
                    <img src={img} alt={title}/>
                </div>

                <div className={css.movieInfo__colom}>
                    <div className={css.movieInfo__header}>
                        <div className={css.movieInfo__logo}>
                            <img src={companies} alt={title} className={css.movieInfo__logoImg}/>
                        </div>
                        <div className={css.movieInfo__title}>{title} ({release_date.split('-')[0]})</div>
                        <div className={css.movieInfo__btnBox}>
                            <button className={css.movieInfo__btnPlay}> <FaRegPlayCircle className={css.movieInfo__icon}/> Play</button>
                            <button className={css.movieInfo__btnFavorites}><FaHeart className={css.movieInfo__icon}/>Favorites</button>
                        </div>
                    </div>

                    <div className={css.movieInfo__body}>
                        <div className={css.movieInfo__title_body}>About the movie : {title}</div>
                        <div className={css.movieInfo__text}>
                            <div><span>Country</span>    <span>{language}</span> </div>
                            <div><span>Retying</span>    <span>{retying}</span> </div>
                            <div><span>Budget</span>    <span>{budget}</span> </div>
                            <div><span>Runtime</span>    <span>{runtime}</span> </div>
                            <div><span>Release</span>    <span>{release_date}</span> </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export {MovieInfo};