import {IUser} from "../interfaces/userInterfases";
import {axiosService, IRes} from "./axiosService";
import {urls} from "../constants/urls";


const userService = {
    getAll: (): IRes<IUser[]> => axiosService.get(urls.users.base),
    // getAll (): Promise<AxiosResponse<IUser[]>> => axiosService.get(urls.users.base)
    getById: (id: number): IRes<IUser[]> => axiosService.get(urls.users.byId(id))
}

export {
    userService
}