import MainContentPost from "./MainContentPost";
import Form from "./Form";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { updatePosts } from "../redux/actions";

function MainContentBlock({ postsInfo }) {
  const [newPostInfo, setState] = useState(postsInfo);

  const dispatch = useDispatch();

  const updatePost = () => {
    setState(newPostInfo);
    dispatch(updatePosts(JSON.stringify(postsInfo)));
    localStorage.setItem("posts", JSON.stringify(postsInfo));
  };

  return (
    <>
      <Form />
      {postsInfo.map((element) => {
        return (
          <MainContentPost
            blockInfo={element}
            key={element.id}
            onClick={updatePost}
          />
        );
      })}
    </>
  );
}

const mapStateToProps = (state) => {
  return { postsInfo: JSON.parse(state.posts.posts) };
};

export default connect(mapStateToProps, null)(MainContentBlock);
