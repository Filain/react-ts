import React, {FC} from 'react';

import {IUser} from "../../../interfaces/userInterface";
import "./user.css"

interface IProps {
    user: IUser
}


const User: FC<IProps> = ({user}) => {
    const {name, surname, age, photo}=user;
    return (
        <div className='simpsonItem'>
            <div>name:{name}</div>
            <div>surname:{surname}</div>
            <div>age:{age}</div>
            <img src={photo} alt={name}/>

        </div>
    );
};

export {User};