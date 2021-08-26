const initialState = {
  posts: localStorage.getItem("posts"),
};

export const postReducer = (state = initialState, action) => {
  if (action.type == "UPD_POSTS") {
    return {posts: action.payload};
  } else {
    return state;
  }
};
