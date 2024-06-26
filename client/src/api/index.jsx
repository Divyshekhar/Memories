import axios from 'axios';

const url= 'http://localhost:3000/posts';

export const fetchPosts = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

export const createPost = (newPost) => axios.post(url, newPost)
  