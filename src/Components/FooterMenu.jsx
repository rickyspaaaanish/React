import logo from './Logo.png';
import FooterMenuItem from './FooterMenuItem';

function FooterMenu() {
  return <div className='footer'><div className='footer__item-logo'><img src={logo} alt=''/><div className='text__middle text__bold footer__logo-text'>Linked<span className='blue-text'>In</span></div></div>
    <div className='footer__item'>
      <div><span className='list__header text__small text__bold'>Navigation</span>
        <div className='footer__item'>
          <ul className='footer__list'>
            <li className='footer__list-item'><FooterMenuItem params={['link', 'About']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem params={['link', 'Careers']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem params={['link', 'Advertising']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem params={['link', 'Small Business']}></FooterMenuItem></li>
          </ul>
          <ul className='footer__list'>
            <li className='footer__list-item'><FooterMenuItem params={['link', 'Talent Solutions']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem params={['link', 'Marketing Solutions']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem params={['link', 'Sales Solutions']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem params={['link', 'Safety Center']}></FooterMenuItem></li>
          </ul>
          <ul className='footer__list'>
            <li className='footer__list-item'><FooterMenuItem params={['link', 'Community Guidelines']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem params={['link', 'Privacy & Terms']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem params={['link', 'Mobile App']}></FooterMenuItem></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='footer__item footer__navigation-controls'>
      <span className='list__header text__small text__bold'>Fast access</span>
      <ul className='footer__list'>
        <li><FooterMenuItem params={['button', 'button__blue', 'Questions?', 'icon-help-circle']}></FooterMenuItem></li>
        <li><FooterMenuItem params={['button', 'button__white', 'Settings', 'icon-settings']}></FooterMenuItem></li>
      </ul>
    </div>
    <div className='footer__item footer__navigation-controls'>
      <span className='list__header text__small text__bold'>Language</span>
      <ul className='footer__list'>
        <li><FooterMenuItem params={['select', ['English', 'Russian', 'German', 'Spanish']]}></FooterMenuItem></li>
      </ul>
    </div>
  </div>;
}

export default FooterMenu;