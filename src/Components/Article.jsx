import classNames from "classnames";
import textstyles from "./../styles/text.module.css";
import styles from "./../styles/Article.module.css";

function Article({ params }) {
  return (
    <div className={styles.aricle}>
      <img src={params.img} alt="" />
      <div className={styles.desription}>
        <span className={classNames(textstyles.middle, textstyles.bold)}>
          {params.name}
        </span>
        <span className={classNames(textstyles.xsmall)}>
          {params.viewers.toLocaleString("en-IN", {
            maximumSignificantDigits: 3,
          }) + " viewers"}
        </span>
      </div>
    </div>
  );
}

export default Article;
