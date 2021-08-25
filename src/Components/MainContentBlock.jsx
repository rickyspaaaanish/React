import MainContentPost from "./MainContentPost";
import Form from "./Form";
import { useState } from "react";
import { connect } from "react-redux";

function MainContentBlock({ postsInfo }) {
  const[newPostInfo, setState] = useState(postsInfo);

  const updatePost = () => {
    setState(newPostInfo);
    localStorage.setItem("posts", JSON.stringify(newPostInfo));
  };

  let blocks = [];
  blocks.push(
    <Form/>
  );

  for (let i = 0; i < postsInfo.length; i++) {
    blocks.push(<MainContentPost blockInfo={postsInfo[i]} onClick = {updatePost} />);
  }
  return blocks;
}

const mapStateToProps = (state) => {
  return {postsInfo: JSON.parse(state.posts.posts)}
}

export default connect(mapStateToProps, null)(MainContentBlock);
