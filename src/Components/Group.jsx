import textstyles from "./../styles/text.module.css";
import classNames from "classnames";

function Group({ params }) {
  return (
    <div className="group">
      <img src={params.img} alt="" />
      <span
        className={classNames(
          "group__name",
          textstyles.middle,
          textstyles.bold
        )}
      >
        {params.groupname}
      </span>
    </div>
  );
}

export default Group;
