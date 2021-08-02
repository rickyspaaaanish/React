function MainContentBlock({blocksInfo}) {
  return <><div className='Main__content-block type-form'><div className='type-form__header text__small text__bold'>{('new post').toUpperCase()}</div>
  <div className='type-form__controls text__large text__gray'>What’s on your mind?<div className='type-form__buttons'><button className='type-form__button icon-paperclip'></button>
  <button className='type-form__button icon-image'></button><button className='type-form__button icon-film'></button><button className='icon-send-1'></button></div></div></div>
    <div className='sort__selection-block'><div className='border-line'></div><div className='sort-control text__small text__bold'>{('Sort by: ').toUpperCase()}<select className='sorting-select text__small text__bold blue-text'>
      <option>{('trending').toUpperCase()}</option><option>{('latest').toUpperCase()}</option></select></div><div className='border-line'></div></div>
    <div className='Main__content-block'>
      <div className='block__header-info text__xsmall'>{blocksInfo[0].header}<div className='icon-more-horizontal'></div></div>
      <div><div className='block__user-info'><img src={blocksInfo[0].userpic}/><div class='block__user-text-info'><span className='text__bold'>{blocksInfo[0].username}</span>
      <span className='text__xsmall'>{blocksInfo[0].userpos}</span></div></div>
      <div className='block__content text__middle'><span>{blocksInfo[0].content}</span><div className='expand-control'>read more</div></div>
      </div>
      <div className='controls__line'>
        <button className='controls__line-button icon-thumbs-up-1'><span className='text__middle text__bold'>{blocksInfo[0].likes}</span></button>
        <button className='controls__line-button icon-message-circle-1'><span className='text__middle text__bold'>{blocksInfo[0].comments}</span></button>
        <button className='controls__line-button share-button icon-share-2'><span className='text__middle text__bold'>{('share').toUpperCase()}</span></button>
    </div>
  </div></>
}

export default MainContentBlock;