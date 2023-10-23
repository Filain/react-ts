import React from 'react';

import {User} from "../User/User";
import {simpsonArr} from "../../../constants/array";
import {IUser} from "../../../interfaces/userInterface";
import "./users.css"

const Users = () => {

 return (
  <div className='simpson_wrap'>
      {
          simpsonArr.map((user: IUser) => <User key={user.name} user={user}/>)
      }
  </div>
 );
};

export {Users};