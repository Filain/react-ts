import {ICar} from "../interfaces/carInterface";
import {IRes} from "../types/resTypes";
import {apiService} from "./apiService";
import {urls} from "../constans/urls";


const carService={
    getAll:():IRes<ICar[]> =>apiService.get(urls.cars.base),
    create:(date:ICar):IRes<ICar>=>apiService.post(urls.cars.base, date),
    update:(id:number, date:ICar):IRes<ICar>=>apiService.put(urls.cars.byId(id), date),
    deleteById:(id:number):IRes<void>=> apiService.delete(urls.cars.byId(id))
}

export {carService}