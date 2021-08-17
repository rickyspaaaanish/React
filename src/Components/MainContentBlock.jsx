import MainContentPost from "./MainContentPost";
import textstyles from "./../styles/text.module.css";
import classNames from "classnames";

function MainContentBlock({ blocksInfo }) {
  let blocks = [];
  blocks.push(
    <>
      <div className="Main__content-block type-form">
        <div
          className={classNames(
            "type-form__header",
            textstyles.small,
            textstyles.bold,
            textstyles.uppercase
          )}
        >
          new post
        </div>
        <div
          className={classNames(
            "type-form__controls",
            textstyles.large,
            textstyles.gray
          )}
        >
          What’s on your mind?
          <div className="type-form__buttons">
            <button className="type-form__button icon-paperclip"></button>
            <button className="type-form__button icon-image"></button>
            <button className="type-form__button icon-film"></button>
            <button className="icon-send-1"></button>
          </div>
        </div>
      </div>
      <div className="sort__selection-block">
        <div className="border-line"></div>
        <div
          className={classNames(
            "sort-control",
            textstyles.small,
            textstyles.bold,
            textstyles.uppercase
          )}
        >
          Sort by:
          <select
            className={classNames(
              "sorting-select",
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
        <div className="border-line"></div>
      </div>
    </>
  );

  for (let i = 0; i < blocksInfo.length; i++) {
    blocks.push(<MainContentPost blockInfo={blocksInfo[i]} />);
  }
  return blocks;
}

export default MainContentBlock;
