import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {movieAction} from "../../redux/slices";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {usePaginationImg} from "../../hooks";


const PostersPreview = ({id}) => {
const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieAction.getMovieCredits({id}))
    },[id,dispatch])

    const {people} = useSelector(state => state.movieReducer);
    const result = usePaginationImg(people,people.length,2 );

    return (
        <div>
            {!!result.length && result.map((value,index) => <PosterPreview key={value.id} people={value}/>)}
        </div>
    );
};

export {PostersPreview};