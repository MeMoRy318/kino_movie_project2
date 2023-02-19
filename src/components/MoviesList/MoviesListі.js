import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieAction} from "../../redux/slices";
import {MovieList} from "../MovieList/MovieList";
import css from './MoviesList.module.css';


const MoviesList = () => {


    const dispatch = useDispatch();
    const {movie} = useSelector(state => state.movieReducer);

    useEffect(()=>{
        dispatch(movieAction.getMovieList())
    },[dispatch])

    return (
        <div className={css.movie}>
            <div className={css.container}>
                <div className={css.movie__header}>
                    <div className={css.movie__title}>New movies</div>
                    <button className={css.movie__btn}>See everything</button>
                </div>
                <div className={css.movie__row}>
                    {!!movie.length && movie.map(movie => <MovieList key={movie.id} movie={movie} />)}
                </div>
                <div className={css.movie__footer}>
                    <button onClick={()=>dispatch(movieAction.showMore())} className={css.movie__btn}>Show more</button>
                </div>
            </div>
        </div>
    );
};

export {MoviesList};