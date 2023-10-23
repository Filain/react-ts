import {useEffect, useState} from 'react';
import {IPost} from "../../interfaces/posrInterfase";
import {postServise} from "../../servises/postServise";
import {Post} from "../post/Post";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;
import {PostDetails} from "../postDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
const [postDetails, setPostDetails] = useState<IPost>(null);
    const click = async (postId: number): Promise<void> => {
        const {data} = await postServise.getById(postId);
        setPostDetails(data)
    }

    useEffect(() => {

        postServise.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
            {posts.map(post => <Post key={post.id} post={post} click={click}/>)}
        </div>
    );
};

export {Posts};