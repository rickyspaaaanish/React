function MainContentBlock({blocksInfo}) {
  let blocks = [];
  blocks.push(
  <><div className='Main__content-block type-form'>
    <div className='type-form__header text__small text__bold'>{('new post').toUpperCase()}</div>
      <div className='type-form__controls text__large text__gray'>What’s on your mind?
        <div className='type-form__buttons'>
          <button className='type-form__button icon-paperclip'></button>
          <button className='type-form__button icon-image'></button>
          <button className='type-form__button icon-film'></button>
          <button className='icon-send-1'></button>
        </div>
      </div>
    </div>
  <div className='sort__selection-block'>
    <div className='border-line'></div>
    <div className='sort-control text__small text__bold'>{('Sort by: ').toUpperCase()}
      <select className='sorting-select text__small text__bold blue-text'>
        <option>{('trending').toUpperCase()}</option>\
        <option>{('latest').toUpperCase()}</option>
      </select>
    </div>
  <div className='border-line'></div>
  </div></>);

  for(let i = 0; i < blocksInfo.length; i++){
    let content = [];
    if(blocksInfo[i].contenttypes.indexOf('text') != -1){
      if(blocksInfo[i].text.length > 260){
        content.push(<><span>{blocksInfo[i].text}</span><div className='expand-control'>read more</div></>);
      } else {
        content.push(<span>{blocksInfo[i].text}</span>);
      }
    }
    if(blocksInfo[i].contenttypes.indexOf('photo') != -1){
      content.push(<img src={blocksInfo[i].photo}/>);
    }
    if(blocksInfo[i].contenttypes.indexOf('files') != -1){
      for(let j = 0; j < blocksInfo[i].files.length; j++){
        content.push(<div className='content__file'><div className='file__logo icon-file-text'></div><div className='content__file-info'>
        <span className='text__middle text__bold'>{blocksInfo[i].files[j].filename}</span><span className='text__xsmall'>
          {blocksInfo[i].files[j].filetype + ', '+ blocksInfo[i].files[j].filesize}</span></div></div>);
      }
    }
    blocks.push(
    <><div className='Main__content-block'>
      <div className='block__header-info text__xsmall'>{blocksInfo[i].header}<div style={{'font-size': "20px"}} className='icon-more-horizontal'></div></div>
        <div><div className='block__user-info'><img src={blocksInfo[i].userpic}/><div class='block__user-text-info'><span className='text__bold'>{blocksInfo[i].username}</span>
        <span className='text__xsmall'>{blocksInfo[i].userpos}</span></div></div>
        <div className='block__content text__middle'>{content}</div></div>
        <div className='controls__line'>
          <button className='controls__line-button icon-thumbs-up-1'><span className='text__middle text__bold'>{blocksInfo[i].likes}</span></button>
          <button className='controls__line-button icon-message-circle-1'><span className='text__middle text__bold'>{blocksInfo[i].comments}</span></button>
          <button className='controls__line-button share-button icon-share-2'><span className='text__middle text__bold'>{('share').toUpperCase()}</span></button>
      </div>
    </div></>);
  }
  return blocks;
}

export default MainContentBlock;