import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieServices} from "../../services";
import {urls} from "../../constans";


const initialState = {
    movie:[],
    people:[],
    movieById:false,
    popularMovie:[],
    page:1,
    total_pages:false,
    isLoading:false,
    error:false
};


const getPopular = createAsyncThunk(
  'movieSlice/getPopular',
  async (_, thunkAPI)=>{
      try {
          const {data:{results}} = await movieServices.getPopularMovie();
          return results;
      }catch (e) {
          return thunkAPI.rejectWithValue(e.response.data)
      }
  }
);


const getMovieList = createAsyncThunk(
    'movieSlice/getMovieList',
    async (_,thunkAPI)=>{
        try {
            const {data} = await movieServices.getAllMovie()
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);


const showMore = createAsyncThunk(
    'movieSlice/showMore',
    async (_, {getState, rejectWithValue})=>{
        try {
            const {movieReducer:{page,total_pages}} = getState();
            if (page != total_pages && total_pages){
                const {data} = await movieServices.getAllMovie(page+1)
                return data;
            }
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const getMovie = createAsyncThunk(
    'movieSlice/getMovie',
    async ({id},thunkAPI)=>{
        try {
            const {data} = await movieServices.getMovieById(id);
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)


const getMovieCredits = createAsyncThunk(
    'movieSlice/getMovieCredits',
    async ({id},thunkAPI)=>{
        try {
            const {data} = await movieServices.getCredits(id);
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)


const movieSlices = createSlice({
    name:'movieSlices',
    initialState,
    reducers:{},
    extraReducers:builder =>
         builder
             .addCase(getPopular.fulfilled,(state, action)=>{
                 state.popularMovie = action.payload.map(value => ({
                     image:urls.posterUrl.base + value['backdrop_path'],
                     caption:value['original_title']
                 }));
             })
             .addCase(getMovieList.fulfilled,(state, action)=>{
                 state.total_pages = action?.payload?.total_pages;
                 state.page = action?.payload?.page;
                 state.movie = action.payload.results.map(value =>({
                     id:value['id'],
                     body:value['overview'],
                     title:value['original_title'],
                     rating:value['vote_average'],
                     release:value['release_date'],
                     img:urls.posterUrl.base + value['poster_path']
                 }))
             })
             .addCase(showMore.fulfilled,(state, action)=>{
                 state.page = action?.payload?.page;
                 const result = action.payload.results.map(value =>({
                     id:value['id'],
                     body:value['overview'],
                     title:value['original_title'],
                     rating:value['vote_average'],
                     release:value['release_date'],
                     img:urls.posterUrl.base + value['poster_path']
                 }))
                 state.movie = [...state.movie,...result]
             })
             .addCase(getMovie.fulfilled,(state, action)=>{
                 const m = action.payload
                 state.movieById = {
                     img:urls.posterUrl.base +m['poster_path'],
                     budget:m['budget'],
                     genres:m['genres'],
                     id:m['id'],
                     language:m['original_language'],
                     title:m['original_title'],
                     body:m['overview'],
                     release_date:m['release_date'],
                     runtime:m['runtime'],
                     retying:m['vote_average'],
                     companies: urls.posterUrl.base + m?.['production_companies'][0]?.['logo_path']
                 };
             })
             .addCase(getMovieCredits.fulfilled,(state, action)=>{
                 state.people = action.payload?.cast.map(m => ({
                     name:m['original_name'],
                     img:urls.posterUrl.base + m['profile_path'],
                     id:m['id']
                 }))
             })
});

const {reducer:movieReducer} = movieSlices;

const movieAction = {
    getPopular,
    getMovieList,
    showMore,
    getMovie,
    getMovieCredits
};

export {movieAction,movieReducer};