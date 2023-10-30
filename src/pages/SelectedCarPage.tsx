import {useAppLocation} from "../hooks/useAppLocation";
import {ICar} from "../interfases/carInrefase";
import {SelectedCar} from "../components/CarsContainer/SelectedCar";

const SelectedCarPage = () => {
    const {state:{car}} = useAppLocation<{car:ICar}>();
    return (
        <div>
            {car && <SelectedCar car={car}/>}
        </div>
    );
};

export {SelectedCarPage};