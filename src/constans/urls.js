const posterUrl = 'https://image.tmdb.org/t/p/original/';
const baseURL = 'https://api.themoviedb.org/3';
const discover = '/discover';
const credits = '/credits'
const popular ='/popular';
const movie = '/movie';
const genre = '/genre';
const list = '/list'

const urls = {
    movie:{
        base:`${discover}/${movie}`,
        byId:(id)=>`${movie}/${id}`
    },
    genre:{
        base:`${genre}${movie}${list}`
    },
    popular:{
        base:`${movie}/${popular}`
    },
    posterUrl:{
        base:posterUrl
    },
    credits:{
        base:(id)=>`${movie}/${id}${credits}`
    }
};

export {urls,baseURL};