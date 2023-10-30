import {FC} from "react";

import {ICar} from "../../interfases/carInrefase";
import css from './Car.module.css'
import {ISetState} from "../../types/ISetState";
import {useNavigate} from "react-router-dom";
import {carSevice} from "../../servises/carSevice";

interface IProps {
    car: ICar,
    setCarForUpdate: ISetState<ICar>
    trigger: () => void
}

const Car: FC<IProps> = ({car, setCarForUpdate, trigger}) => {
    const {id, year, price, brand} = car;

    const navigate = useNavigate()
    const del = async () => {
        await carSevice.deleteById(id)
        trigger()
    }

    return (
        <div className={css.Car}>
            <div>id:{id}</div>
            <div>year:{year}</div>
            <div>price:{price}</div>
            <div>brand:{brand}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={del}>Delete</button>
            <button onClick={() => navigate('select', {state: {car}})}>Select</button>
        </div>
    );
};

export {Car};