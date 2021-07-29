function NavigationItem({ props }) {
  switch (props[0]) {
    case 'logo':
      return <img src={props[1]} className={props[0]}></img>;
    case 'button':
      return <button className={props[0]}><span className={'navigation__item-icon ' + props[1]}></span>{props[2].toUpperCase()}</button>;
    case 'search':
      return <div className={props[0]}><span className={'navigation__item-icon ' + props[1]}></span>
      <span className='search-label'>{props[2].charAt(0).toUpperCase()+props[2].slice(1)}</span></div>;
    case 'profile':
      return <div className={props[0]}><img src={props[1]}></img><div className='profile__info'>
      <div class='profile__info-line'><span className='profile__info-text userName'>{props[2][0].toUpperCase()}</span><span className='profile__info-text you-label'>YOU</span></div>
      <div class='profile__info-line'><span className='profile__info-text views-count'>{props[2][1] + ' views today'}</span>
      <div className={'profile__info-text difference-label'}>{props[2][2] >= 0 ? '+'+props[2][2]: props[2][2]}<span className={'profile__info-text ' + props[3]}></span></div>
      </div></div></div>;
    default:
      return <div></div>;
  }
}

export default NavigationItem;