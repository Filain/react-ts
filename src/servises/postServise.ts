import {IPost} from "../interfaces/posrInterfase";
import {axiosServise, IRes} from "./axiosServise";
import {urls} from "../constans/urls";

const postServise ={
    getAll:():IRes<IPost[]> => axiosServise.get(urls.posts.base),
    getById:(id:number):IRes<IPost>=>axiosServise.get(urls.posts.byId(id))
}
export {
    postServise
}