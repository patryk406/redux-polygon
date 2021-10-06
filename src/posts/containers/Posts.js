import {useState} from 'react';

import PostsList from '../components/PostsList'

const Posts = () => {

    const [posts,setPosts]=useState([]);
    const fetchData = () => fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res =>res.json())
    .then(data => setPosts(data.slice(0,3)))

    return (
        <div className='container'>
        <h2>Posts</h2>
        <button onClick={fetchData}>Fetch Posts</button>
        <PostsList posts={posts}/>
        </div>
    )
}

export default Posts
