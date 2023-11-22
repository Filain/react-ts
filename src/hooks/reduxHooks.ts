import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../types/reduxTypes";

const  useAppSelector: TypedUseSelectorHook<RootState>=useSelector

const useAppDispatch=()=> useAppSelector<AppDispatch>

export {useAppDispatch,useAppSelector}