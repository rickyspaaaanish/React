import textstyles from "./../styles/text.module.css";
import styles from "./../styles/Group.module.css";
import classNames from "classnames";

function Group({ params }) {
  return (
    <div className={styles.group}>
      <img src={params.img} alt="" />
      <span
        className={classNames(styles.name, textstyles.middle, textstyles.bold)}
      >
        {params.groupname}
      </span>
    </div>
  );
}

export default Group;
