import {urls} from "../constans";
import {apiServices} from "./apiServices";


const movieServices = {
    getAllMovie:(page=1)=>apiServices.get(urls.movie.base,{params:{page}}),
    getPopularMovie:()=>apiServices.get(urls.popular.base),
    getMovieById:(id)=>apiServices.get(urls.movie.byId(id)),
    getCredits:(id)=>apiServices.get(urls.credits.base(id))
};

export {movieServices};