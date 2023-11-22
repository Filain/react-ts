import {FC, PropsWithChildren} from "react";
import {ICar} from "../../interfaces/carInterface";

interface IProps extends PropsWithChildren {
car:ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id,year,price,brand}=car
    return (
        <div>
            <div>id: {id}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <div>brand: {brand}</div>
            <button>update</button>
            <button>delete</button>
        </div>
    );
};

export {Car};