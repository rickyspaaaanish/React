import textstyles from "./../styles/text.module.css";
import styles from "./../styles/PostButton.module.css";
import classNames from "classnames";

function Likes({ likes, liked, onClick, icon }) {
  return (
    <button
      className={classNames(styles.button, icon)}
      onClick={onClick}
    >
      <span className={classNames(textstyles.middle, textstyles.bold)}>
        {likes}
      </span>
    </button>
  );
}

export default Likes;
