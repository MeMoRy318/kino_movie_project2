import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {MovieInfo, PostersPreview} from "../../components";
import css from './MovieInfoPage.module.css'
import {movieAction} from "../../redux/slices";

const MovieInfoPage = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {movieById} = useSelector(state => state.movieReducer);

    useEffect(()=>{
        dispatch(movieAction.getMovie({id}))
    },[dispatch,id])


    return (
        <div>
            <div className={css.container__movie}>
                {movieById && <MovieInfo movie={movieById}/>}
                {movieById && <PostersPreview id={id}/>}
            </div>
        </div>
    );
};

export {MovieInfoPage};