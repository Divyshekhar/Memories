import { useEffect } from 'react';
import Post from './Post/Post'
import { useSelector } from 'react-redux';

const Posts = () => {

  const posts = useSelector((state) => (state.posts));
  console.log(posts) // 2 logs because the first one is before the fetching of the posts and the other one is after the fetching of the postsj



  return (
    <>
      <h1>Posts</h1>
      <Post/>
      <Post/>


    </>
  );
}

export default Posts