import background from './Background.png';
import userpic from './Userpic.png';

function SideContentBlock() {
  return <><div className='side__user-info'><img src={background} alt=''/><img src={userpic} alt='' className='side__user-pic'/><div className='side__user-info__text'>
    <span className='text__middle text__bold'>Dmitry Kargaev</span>
    <span className='text__xsmall'>Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers.</span></div></div>
    <div className='side__new-article'><button className='new-article__button button__blue text__small text__up'>write new article</button></div></>;
}

export default SideContentBlock;