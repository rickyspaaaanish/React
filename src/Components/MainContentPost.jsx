function MainContentPost({blockInfo, content}){
    return <div className='Main__content-block'>
    <div className='block__header-info text__xsmall'>{blockInfo.header}<div style={{'font-size': "20px"}} className='icon-more-horizontal'></div></div>
      <div><div className='block__user-info'><img src={blockInfo.userpic}/><div className='block__user-text-info'><span className='text__bold'>{blockInfo.username}</span>
      <span className='text__xsmall'>{blockInfo.userpos}</span></div></div>
      <div className='block__content text__middle'>{content}</div></div>
      <div className='controls__line'>
        <button className='controls__line-button icon-thumbs-up-1'><span className='text__middle text__bold'>{blockInfo.likes}</span></button>
        <button className='controls__line-button icon-message-circle-1'><span className='text__middle text__bold'>{blockInfo.comments}</span></button>
        <button className='controls__line-button share-button icon-share-2'><span className='text__middle text__bold'>{('share').toUpperCase()}</span></button>
    </div>
  </div>;
}

export default MainContentPost;