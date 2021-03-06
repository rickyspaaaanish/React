import styles from "./../styles/FooterMenuItem.module.css";
import textstyles from "./../styles/text.module.css";
import classNames from "classnames";

function FooterMenuItem({ params }) {
  switch (params.type) {
    case "link":
      return (
        <li className={styles.item}>
          <a className={classNames(styles.link, textstyles.small)} href="">
            {params.caption}
          </a>
        </li>
      );
    case "button":
      return (
        <li>
          <button
            className={classNames(
              styles.button,
              params.color == "white" ? styles.button_white : styles.button_blue
            )}
          >
            {params.caption.toUpperCase()}
            <span className={params.icon}></span>
          </button>
        </li>
      );
    case "select":
      return (
        <select
          className={classNames(
            styles.select,
            textstyles.small,
            textstyles.bold
          )}
        >
          {params.options.map((element) => {
            return (
              <option className={classNames(textstyles.small, textstyles.bold)}>
                {element.toUpperCase()}
              </option>
            );
          })}
        </select>
      );
    default:
      return;
  }
}

export default FooterMenuItem;
