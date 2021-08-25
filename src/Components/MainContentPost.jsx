import { useState } from "react";
import Likes from "./Likes";
import textstyles from "./../styles/text.module.css";
import styles from "./../styles/Post.module.css";
import buttonstyles from "./../styles/PostButton.module.css";
import classNames from "classnames";

function MainContentPost({ blockInfo, onClick }) {
  let content = [];

  const [liked, setState] = useState(blockInfo.liked);
  const [likes, setCount] = useState(blockInfo.likes);

  const setLike = () => {
    setState(!liked);
    blockInfo.liked = !liked;
    !liked ? blockInfo.likes++ : blockInfo.likes--;
    setCount(blockInfo.likes);
  };

  const [collapsed, setExpanded] = useState(blockInfo.text.length > 260);

  const collapse = (event) => {
    setExpanded(!collapsed);
    event.target.innerHTML = '';
    event.target.parentElement.textContent = blockInfo.text
  }

  if (blockInfo.hasOwnProperty("text")) {
    if (blockInfo.text.length > 260) {
      content.push(
        <>
          <div>
            <div className={styles.gradient}>{blockInfo.text.slice(0, 260)}</div>
            <div className={styles.expand} onClick={collapse}>read more</div>
          </div>
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
        <div className={styles.file}>
          <div className={classNames(styles.file__logo, styles.file__icon, "icon-file-text")}></div>
          <div className={styles.file__info}>
            <span className={classNames(textstyles.middle, textstyles.bold)}>
              {blockInfo.files[j].filename}
            </span>
            <span className={textstyles.xsmall}>
              {blockInfo.files[j].filetype + ", " + blockInfo.files[j].filesize}
            </span>
          </div>
          <div className={classNames(styles.file__icon, styles.icon__download, "icon-download-cloud")}></div>
        </div>
      );
    }
  }
  return (
    <div className={styles.main} onClick={onClick}>
      <div className={classNames(styles.header, textstyles.xsmall)}>
        {blockInfo.header}
        <div className={classNames("icon-more-horizontal", textstyles.large)}></div>
      </div>
      <div>
        <div className={styles.user__block}>
          <img src={blockInfo.userpic} alt="" />
          <div className={styles.user__info}>
            <span className={textstyles.bold}>{blockInfo.username}</span>
            <span className={textstyles.xsmall}>{blockInfo.userpos}</span>
          </div>
        </div>
        <div className={classNames(styles.content, textstyles.middle)}>{content}</div>
      </div>
      <div className={styles.controls}>
        <Likes
          likes={blockInfo.likes}
          liked={liked}
          onClick={setLike}
          icon={liked ? "icon-thumbs-up" : "icon-thumbs-up-1"}
        />
        <button className={classNames(buttonstyles.button, "icon-message-circle-1")}>
          <span className={classNames(textstyles.middle, textstyles.bold)}>
            {blockInfo.comments}
          </span>
        </button>
        <button className={classNames(buttonstyles.button, buttonstyles.share__button, "icon-share-2")}>
          <span
            className={classNames(textstyles.middle, textstyles.bold, textstyles.uppercase)}>
            share
          </span>
        </button>
      </div>
    </div>
  );
}

export default MainContentPost;
