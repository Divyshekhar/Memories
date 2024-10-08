import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost } from '../../actions/posts';
// { currentId, setCurrentId }

const Form = () => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (post) setPostData(post);
  // }, [post]);

  const clear = () => {
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPost(postData)) 

    // if (currentId === 0) {
    //   dispatch(createPost(postData));
    //   clear();
    // } else {
    //   dispatch(updatePost(currentId, postData));
    //   clear();
    // }
  };

  return (
      <Paper>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">Creating a Memory</Typography>
          <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} 
            onChange={(e) => setPostData( {...postData, creator: e.target.value} )} />

          <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} 
            onChange={(e) => setPostData({ ...postData, title: e.target.value })} />

          <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} 
            onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

          <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} 
            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />

          <div>
            <FileBase type="file" multiple={false} 
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
          </div>
          <Button variant="contained" color="primary" size="large" type="submit" fullWidth onClick={handleSubmit}>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
  );
};

export default Form;
