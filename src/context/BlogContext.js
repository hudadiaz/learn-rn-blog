import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_post':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    case 'delete_post':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case 'edit_post':
    default:
      return state;
  }
}

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_post'});
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_post', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
  },
  [],
);
