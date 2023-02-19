import {useEffect} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "./layout";
import {LoginFormPage, MovieInfoPage, MoviesPage, NotFoundPage, RegisterFormPage} from "./containers";


const App = () => {

    useEffect(()=>{
        // movieServices.getAllMovie().then(value => console.log(value))
        // movieServices.getMovieById(505642).then(value => console.log(value))
        // movieServices.getPopularMovie().then(value => console.log(value))
    },[])

    return (

        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'movieList'}/>}/>
                <Route path={'movieList'} element={<MoviesPage/>}/>
                <Route path={'movieInfo/:id'} element={<MovieInfoPage/>}/>
                <Route path={'login'} element={<LoginFormPage/>}/>
                <Route path={'register'} element={<RegisterFormPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};