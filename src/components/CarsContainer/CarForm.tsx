import {FC, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfases/carInrefase";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import {carSevice} from "../../servises/carSevice";

interface IProps {
    trigger: () => void,
    carForUpdate: ICar
}

const CarForm: FC<IProps> = ({trigger, carForUpdate}) => {
    const {reset, register, handleSubmit, setValue, formState: {errors, isValid}} = useForm<ICar>({
        mode: 'onBlur',
        resolver: joiResolver(carValidator)
    })

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})

        }
    }, [carForUpdate, setValue]);


    const save: SubmitHandler<ICar> = async (car) => {
        await carSevice.create(car)
        trigger()
        reset()
    };

const update:SubmitHandler<ICar>= async (car) => {
    await carSevice.updateById(carForUpdate.id, car)
    trigger()
    reset()
}


    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'prise'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{carForUpdate?'Update':'Save'}</button>
            </form>
            {errors.brand && <div>brand: {errors.brand.message}</div>}
            {errors.price && <div>price: {errors.price.message}</div>}
            {errors.year && <div>year: {errors.year.message}</div>}
        </div>
    );
};

export {CarForm};