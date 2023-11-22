import {configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices/carsSlise";

const store = configureStore({
    reducer:{
        cars:carReducer
    }
})

export {store}