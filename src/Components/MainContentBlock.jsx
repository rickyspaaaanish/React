import MainContentPost from "./MainContentPost";

function MainContentBlock({ blocksInfo }) {
  let blocks = [];
  blocks.push(
    <>
      <div className="Main__content-block type-form">
        <div className="type-form__header text__small text__bold text__up">
          new post
        </div>
        <div className="type-form__controls text__large text__gray">
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
        <div className="sort-control text__small text__bold text__up">
          Sort by: 
          <select className="sorting-select text__small text__bold blue-text text__up">
            <option className='text__up'>trending</option>
            <option className='text__up'>latest</option>
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
