import logo from './Logo.png';
import FooterMenuItem from './FooterMenuItem';
import NavigationItem from './NavigationItem';

function FooterMenu() {
  return <div className='footer'><div className='footer__item-logo'><img src={logo} /><div className='text__middle text__bold footer__logo-text'>Linked<span className='blue-text'>In</span></div></div>
    <div className='footer__item'>
      <div><span className='list__header text__small text__bold'>Navigation</span>
        <div className='footer__item'>
          <ul className='footer__list'>
            <li className='footer__list-item'><FooterMenuItem props={['link', 'About']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem props={['link', 'Careers']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem props={['link', 'Advertising']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem props={['link', 'Small Business']}></FooterMenuItem></li>
          </ul>
          <ul className='footer__list'>
            <li className='footer__list-item'><FooterMenuItem props={['link', 'Talent Solutions']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem props={['link', 'Marketing Solutions']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem props={['link', 'Sales Solutions']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem props={['link', 'Safety Center']}></FooterMenuItem></li>
          </ul>
          <ul className='footer__list'>
            <li className='footer__list-item'><FooterMenuItem props={['link', 'Community Guidelines']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem props={['link', 'Privacy & Terms']}></FooterMenuItem></li>
            <li className='footer__list-item'><FooterMenuItem props={['link', 'Mobile App']}></FooterMenuItem></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='footer__item footer__navigation-controls'>
      <span className='list__header text__small text__bold'>Fast access</span>
      <ul className='footer__list'>
        <li><FooterMenuItem props={['button', 'button__blue', 'Questions?', 'icon-help-circle']}></FooterMenuItem></li>
        <li><FooterMenuItem props={['button', 'button__white', 'Settings', 'icon-settings']}></FooterMenuItem></li>
      </ul>
    </div>
    <div className='footer__item footer__navigation-controls'>
      <span className='list__header text__small text__bold'>Language</span>
      <ul className='footer__list'>
        <li><FooterMenuItem props={['select', ['English', 'Russian', 'German', 'Spanish']]}></FooterMenuItem></li>
      </ul>
    </div>
  </div>;
}

export default FooterMenu;