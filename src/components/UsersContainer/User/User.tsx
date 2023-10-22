import React, {FC} from 'react';
import {IUser} from "../../../interfaces/userInterfases";

interface IProps {
    user: IUser
    click: (id:number) =>Promise<void>
}

const User: FC<IProps> = ({user,click}) => {
    const {id, name, username, email, phone} = user;
    return (
        <div>
            <div>Id:{id}</div>
            <div>Name:{name}</div>
            <div>Username:{username}</div>
            <div>Email:{email}</div>
            <div>Phone:{phone}</div>
            <button onClick={()=>click(id)}>Details</button>
        </div>
    );
};

export {User};