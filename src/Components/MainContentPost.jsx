import { useState } from "react";
import Likes from "./Likes";

function MainContentPost({ blockInfo }) {
  let content = [];

  const [liked, setState] = useState(blockInfo.liked);

  const setLike = () => {
    setState(!liked)
    !liked ? blockInfo.likes++ : blockInfo.likes--
  };

  if (blockInfo.hasOwnProperty("text")) {
    if (blockInfo.text.length > 260) {
      content.push(
        <>
          <span>{blockInfo.text}</span>
          <div className="expand-control">read more</div>
        </>
      );
    } else {
      content.push(<span>{blockInfo.text}</span>);
    }
  }
  if (blockInfo.hasOwnProperty("photo")) {
    content.push(<img src={blockInfo.photo} alt="" />);
  }
  if (blockInfo.hasOwnProperty("files")) {
    for (let j = 0; j < blockInfo.files.length; j++) {
      content.push(
        <div className="content__file">
          <div className="file__logo icon-file-text"></div>
          <div className="content__file-info">
            <span className="text__middle text__bold">
              {blockInfo.files[j].filename}
            </span>
            <span className="text__xsmall">
              {blockInfo.files[j].filetype + ", " + blockInfo.files[j].filesize}
            </span>
          </div>
          <div className="icon-download-cloud"></div>
        </div>
      );
    }
  }
  return (
    <div className="Main__content-block">
      <div className="block__header-info text__xsmall">
        {blockInfo.header}
        <div className="icon-more-horizontal text__large"></div>
      </div>
      <div>
        <div className="block__user-info">
          <img src={blockInfo.userpic} alt="" />
          <div className="block__user-text-info">
            <span className="text__bold">{blockInfo.username}</span>
            <span className="text__xsmall">{blockInfo.userpos}</span>
          </div>
        </div>
        <div className="block__content text__middle">{content}</div>
      </div>
      <div className="controls__line">
        <Likes
          likes={blockInfo.likes}
          liked={liked}
          onClick={setLike}
          icon={liked ? "icon-thumbs-up" : "icon-thumbs-up-1"}
        />
        <button className="controls__line-button icon-message-circle-1">
          <span className="text__middle text__bold">{blockInfo.comments}</span>
        </button>
        <button className="controls__line-button share-button icon-share-2">
          <span className="text__middle text__bold text__up">share</span>
        </button>
      </div>
    </div>
  );
}

export default MainContentPost;
