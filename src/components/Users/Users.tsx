import React, {useEffect, useState} from 'react';
import {IUser,IData} from "../../interfaces/userInrerface";
import {userServise} from "../../services/userServise";
import {User} from "../User/User";

const Users = () => {
 const [users, setUsers] = useState<IUser[]>([]);

 useEffect(() => {
  userServise.getAll().then(({data})=>setUsers(data.results))

 }, []);

 return (
  <div>
   {
    users.map(user =><User key={user.id} user={user}/>)
   }
  </div>
 );
};

export {Users};