const postsReducer = (post = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload || []; 
      case 'CREATE':
        return [...post, action.payload]; 
      default:
        return post;
    }
  };
  //post = state
  export default postsReducer;
  