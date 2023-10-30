import {ICar} from "../../interfases/carInrefase";
import {FC, useEffect, useState} from "react";
import {carSevice} from "../../servises/carSevice";
import {Car} from "./Car";
import {ISetState} from "../../types/ISetState";

interface IProps {
    flag:boolean
    setCarForUpdate:ISetState<ICar>
    trigger: () => void
}

const Cars: FC<IProps>= ({flag,setCarForUpdate,trigger}) => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        carSevice.getAll().then(({data})=>setCars(data))
    }, [flag]);

    // @ts-ignore
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} trigger={trigger}/>)}
        </div>
    );
};

export {Cars};