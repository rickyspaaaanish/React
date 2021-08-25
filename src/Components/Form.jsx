import textstyles from "./../styles/text.module.css";
import styles from "./../styles/MainContent.module.css";
import classNames from "classnames";

function Form() {
  return (
    <>
      <div className={classNames(styles.main, styles.new_post)}>
        <div
          className={classNames(
            styles.new_post__header,
            textstyles.small,
            textstyles.bold,
            textstyles.uppercase
          )}
        >
          new post
        </div>
        <div
          className={classNames(
            styles.controls__pannel,
            textstyles.large,
            textstyles.gray
          )}
        >
          What’s on your mind?
          <div className={styles.buttons}>
            <button
              className={classNames(styles.button, "icon-paperclip")}
            ></button>
            <button
              className={classNames(styles.button, "icon-image")}
            ></button>
            <button className={classNames(styles.button, "icon-film")}></button>
            <button
              className={classNames(styles.send_button, "icon-send-1")}
            ></button>
          </div>
        </div>
      </div>
      <div className={styles.sort}>
        <div className={styles.line}></div>
        <div
          className={classNames(
            styles.sorting_by__control,
            textstyles.small,
            textstyles.bold,
            textstyles.uppercase
          )}
        >
          Sort by:
          <select
            className={classNames(
              styles.select,
              textstyles.small,
              textstyles.bold,
              textstyles.blue,
              textstyles.uppercase
            )}
          >
            <option className={textstyles.uppercase}>trending</option>
            <option className={textstyles.uppercase}>latest</option>
          </select>
        </div>
        <div className={styles.line}></div>
      </div>
    </>
  );
}

export default Form;
