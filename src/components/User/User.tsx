import React, {FC} from 'react';
import {IUser} from "../../interfaces/userInrerface";

interface IProps {
user:IUser
}

const User:FC<IProps> = ({user}) => {
 const {id,name,gender,image}=user
 return (
  <div>
   <div>id:{id}</div>
   <div>name:{name}</div>
   <div>gender:{gender}</div>
   <img src={image} alt={name}/>
  </div>
 );
};

export {User};