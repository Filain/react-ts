import {IData, IUser} from "../interfaces/userInrerface";
import {axiosServise, IRes} from "./axiosServise";
import {urls} from "../constants/urls";

const userServise={
    getAll:():IRes<IData> => axiosServise.get(urls.characters.base),
    getById:(id:number):IRes<IData> => axiosServise.get(urls.characters.byId(id))
}

export {userServise}