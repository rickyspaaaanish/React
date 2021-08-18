import styles from "./../styles/HeaderItem.module.css";
import textstyles from "./../styles/text.module.css";
import classNames from "classnames";

function NavigationItem({ params }) {
  switch (params.type) {
    case "logo":
      return <img src={params.img} alt="" className={styles.logo} />;
    case "button":
      return (
        <button className={styles.button}>
          <span className={classNames(styles.button__icon, params.icon)} />
          {params.caption.toUpperCase()}
        </button>
      );
    case "search":
      return (
        <div className={styles.search}>
          <span className={classNames(styles.button__icon, params.icon)} />
          <span className={styles.search__label}>
            {params.caption.charAt(0).toUpperCase() + params.caption.slice(1)}
          </span>
        </div>
      );
    case "profile":
      return (
        <div className={styles.profile}>
          <img src={params.userpic} alt="" />
          <div className={styles.profile__info}>
            <div className={styles.profile__info_line}>
              <span className={classNames(textstyles.small, textstyles.bold)}>
                {params.info.name.toUpperCase()}
              </span>
              <span className={classNames(textstyles.small, styles.you_label)}>
                YOU
              </span>
            </div>
            <div className={styles.profile__info_line}>
              <span
                className={classNames(textstyles.small, styles.views_count)}
              >
                {params.info.views + " views today"}
              </span>
              <div
                className={classNames(textstyles.small, styles.difference_label)}>
                {params.info.diff >= 0 ? "+" + params.info.diff : params.info.diff}
                <span
                  className={classNames(textstyles.small, "icon-arrow-up-right")}/>
              </div>
            </div>
          </div>
        </div>
      );
    case "space-div":
      return <div className={styles.space_div} />;
    default:
      return;
  }
}

export default NavigationItem;
