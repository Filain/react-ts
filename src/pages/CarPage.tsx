import {Cars} from "../components/CarsContainer/Cars";
import {CarForm} from "../components/CarsContainer/CarForm";
import {useState} from "react";
import {ICar} from "../interfases/carInrefase";
import {Outlet} from "react-router-dom";


const CarPage = () => {
    const [flag, setFlag] = useState<boolean>(null);
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null);

    const trigger = (): void => {
        setFlag(prevState => !prevState)
    };


    return (
        <div>
            <CarForm trigger={trigger} carForUpdate={carForUpdate}/>
            <hr/>
            <div>
                <Outlet/>
                <hr/>
                <Cars flag={flag} setCarForUpdate={setCarForUpdate} trigger={trigger} />

            </div>
        </div>
    );
};

export {CarPage};