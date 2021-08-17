import styles from "./../styles/HeaderItem.module.css";
import textstyles from "./../styles/text.module.css";

function NavigationItem({ params }) {
  switch (params.type) {
    case "logo":
      return <img src={params.img} alt="" className={styles.logo} />;
    case "button":
      return (
        <button className={styles.button}>
          <span className={styles.button__icon + " " + params.icon} />
          {params.caption.toUpperCase()}
        </button>
      );
    case "search":
      return (
        <div className={styles.search}>
          <span className={styles.button__icon + " " + params.icon} />
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
              <span className={textstyles.small + " " + textstyles.bold}>
                {params.info.name.toUpperCase()}
              </span>
              <span className={textstyles.small + " " + styles.you_label}>
                YOU
              </span>
            </div>
            <div className={styles.profile__info_line}>
              <span className={textstyles.small + " " + styles.views_count}>
                {params.info.views + " views today"}
              </span>
              <div
                className={textstyles.small + " " + styles.difference_label}
              >
                {params.info.diff >= 0
                  ? "+" + params.info.diff
                  : params.info.diff}
                <span className={textstyles.small + "icon-arrow-up-right"} />
              </div>
            </div>
          </div>
        </div>
      );
    case "space-div":
      return <div className={params.type} />;
    default:
      return;
  }
}

export default NavigationItem;
