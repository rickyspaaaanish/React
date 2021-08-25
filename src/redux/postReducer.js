const initialState = {
  posts: localStorage.getItem("posts")
}

export const postReducer = (state = initialState, action) => {
  return state;
};
