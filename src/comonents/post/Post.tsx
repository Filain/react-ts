import React, {FC} from 'react';
import {IPost} from "../../interfaces/posrInterfase";


interface IProps {
    post: IPost
    click:(id:number)=>Promise<void>
}

const Post: FC<IProps> = ({post,click}) => {
    const {userId, id, title, body} = post;
    return (


    <div>
        <div>id:{id}</div>
        <div>title:{title}</div>
        <button onClick={()=>click(id)}>Details</button>
    </div>
)
    ;
};

export {Post};