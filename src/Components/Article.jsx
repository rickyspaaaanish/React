import classNames from "classnames";
import textstyles from "./../styles/text.module.css";

function Article({ params }) {
  return (
    <div className="aricle">
      <img src={params.img} alt="" />
      <div className="article__desription">
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
