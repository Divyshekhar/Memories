import axios from 'axios';

const url= 'https://memories-backend-1ezd.onrender.com/posts';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return []; // Return an empty array on error
  }
};

export const createPost = (newPost) => axios.post(url, newPost)
  