import {combineReducers, configureStore} from "@reduxjs/toolkit";
import menuSlice from './reducers'

const rootReducer = combineReducers({
    menu: menuSlice
})

export const store = configureStore({
    reducer: rootReducer
})