import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces/carInterface";
import {AxiosError} from "axios";
import {carService} from "../../services/carService";

interface IState{
    cars:ICar[]

}

const initialState:IState={
    cars:[]
};

const getAll = createAsyncThunk<ICar[], void>(
    'carsSlice/getAll',
    async (_, {rejectWithValue})=> {
        try {
            const {data}=await carService.getAll();
            return data

        }catch (e){
            const err=e as AxiosError;
            return rejectWithValue(err.response?.data)
        }

    }
)

const carsSlice = createSlice({
    name:'carsSlice',
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars=action.payload
            })
})

const {reducer:carReducer, actions} = carsSlice;
const carActions = {...actions, getAll}
export {carReducer, carActions}