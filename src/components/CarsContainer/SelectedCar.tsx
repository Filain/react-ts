import {FC} from "react";
import {ICar} from "../../interfases/carInrefase";

interface IProps {
car:ICar
}

const SelectedCar: FC<IProps> = ({car}) => {
    const {price,id,brand,year}=car;
    return (
        <div>
            <div>price: {price}</div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {SelectedCar};