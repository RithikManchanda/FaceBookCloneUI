import { addAllPost, selectPost } from '@/public/src/features/postSlice';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'

const Posts = () => {
    const FACEBOOK_CLONE_ENDPOINT="http://localhost:8080/ap1/v1/post";
    const dispatch = useDispatch();
    const posts  = useSelector(selectPost);
    useEffect(() => {
        const fetchData = () => {
          const response = axios
            .get(FACEBOOK_CLONE_ENDPOINT)
            .then((response) => {
              console.log(response.data);
              dispatch(addAllPost(response.data));
            });
        };
        fetchData();
        console.log(posts);
      }, []);
  return (
    <div>
        {posts.map((post)=>(
        <Post post={post} key={post.id}/>   
        ))}
    </div>
  );
};

export default Posts;