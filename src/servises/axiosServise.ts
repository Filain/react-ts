import axios, {AxiosResponse} from "axios";
import {baseURL} from "../constans/urls";


export type IRes<T>=Promise<AxiosResponse<T>>
const axiosServise= axios.create({baseURL})




export {
    axiosServise
}