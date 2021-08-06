function NavigationItem({ props, onClick }) {
  switch (props[0]) {
    case 'logo':
      return <img src={props[1]} alt='' className={props[0]}></img>;
    case 'button':
      return <button className={props[0]}><span className={'navigation__item-icon ' + props[1]}></span>{props[2].toUpperCase()}</button>;
    case 'search':
      return <div className={props[0]} onClick={() => {props.slice(1)}}><span className={'navigation__item-icon ' + props[1]}></span>
      <span className='search-label'>{props[2].charAt(0).toUpperCase()+props[2].slice(1)}</span></div>;
    case 'profile':
      return <div className={props[0]}><img src={props[1]} alt=''></img><div className='profile__info'>
      <div className='profile__info-line'><span className='text__small text__bold'>{props[2][0].toUpperCase()}</span><span className='text__small you-label'>YOU</span></div>
      <div className='profile__info-line'><span className='text__small views-count'>{props[2][1] + ' views today'}</span>
      <div className={'text__small difference-label'}>{props[2][2] >= 0 ? '+'+props[2][2]: props[2][2]}<span className={'text__small ' + props[3]}></span></div>
      </div></div></div>;
    default:
      return;
  }
}

export default NavigationItem;