import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constants/urls";

export type  IRes<T> = Promise<AxiosResponse<T>>
const axiosServise=axios.create({baseURL})

export {axiosServise}