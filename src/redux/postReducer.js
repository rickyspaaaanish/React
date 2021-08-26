const initialState = {
  posts: localStorage.getItem("posts"),
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPD_POSTS":
      return { posts: action.payload };
    default:
      return state;
  }
};
