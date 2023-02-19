import {useEffect} from "react";
import {Carousel} from 'react-carousel-minimal';
import {useDispatch, useSelector} from "react-redux";

import css from './Slider.module.css';
import {movieAction} from "../../redux/slices";


const Slider = () => {


    const {popularMovie} = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(movieAction.getPopular())
    }, [dispatch])


    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }


    return (
        <div className={css.slider}>
            {!!popularMovie.length &&
                <Carousel
                    data={popularMovie}
                    time={4000}
                    width="100%"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="0"
                    slideNumber={false}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={false}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={false}
                    thumbnailWidth="100px"
                    style={{
                        textAlign: "center",
                        maxHeight: "500px",
                        margin: "40 auto",
                        position: "relative",
                        zIndex: "-1"
                    }}
                />
            }
        </div>
    );
};

export {Slider};