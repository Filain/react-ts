import {axiosServise} from "./axiosServise";

import {IRes} from "../types/IRes";
import {ICar} from "../interfases/carInrefase";
import {urls} from "../constants/urls";

const carSevice={
    getAll:():IRes<ICar[]>=>axiosServise.get(urls.cars.base),
    create:(data:ICar):IRes<ICar> =>axiosServise.post(urls.cars.base, data),
    updateById:(id:number, data:ICar):IRes<ICar> =>axiosServise.put(urls.cars.byId(id), data),
    deleteById:(id:number):IRes<void>=>axiosServise.delete(urls.cars.byId(id))
}

export {
    carSevice
}