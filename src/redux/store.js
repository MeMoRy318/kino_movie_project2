import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReducer, movieReducer} from "./slices";


const rootReducers = combineReducers({
    movieReducer,
    authReducer
});


const setupStore = () => configureStore({
    reducer:rootReducers
});


export {setupStore};