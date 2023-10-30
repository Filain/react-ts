import axios from "axios";

import {baseURL} from "../constants/urls";

const axiosServise=axios.create({baseURL})

export {
    axiosServise
}