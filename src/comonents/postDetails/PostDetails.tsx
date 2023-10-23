import {FC,PropsWithChildren} from 'react';
import {IPost} from "../../interfaces/posrInterfase";

interface IProps extends PropsWithChildren{
 postDetails:IPost
}

const PostDetails: FC<IProps> = ({postDetails}) => {
    const {userId,id,title,body}=postDetails
 return (
  <div>
   <div>userId:{userId}</div>
   <div>id:{id}</div>
   <div>title:{title}</div>
   <div>body:{body}</div>
  </div>
 );
};

export {PostDetails};