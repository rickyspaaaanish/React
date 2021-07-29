import NavigationItem from "./NavigationItem";
import logo from './Logo.png';
import userpic from './Rectangle.png';
import icomoon from './icomoon/style.css'

function Navigation(){
  return <ul class = "Navigation">
    <li class='border-elem'><NavigationItem props={['logo', logo]}></NavigationItem></li>
    <li><NavigationItem props={['button', 'icon-rss', 'feed']}></NavigationItem></li>
    <li><NavigationItem props={['button', 'icon-users', 'network']}></NavigationItem></li>
    <li><NavigationItem props={['button', 'icon-briefcase', 'jobs']}></NavigationItem></li>
    <li><NavigationItem props={['button', 'icon-message-square', 'chat']}></NavigationItem></li>
    <li><NavigationItem props={['button', 'icon-bell', 'notices']}></NavigationItem></li>
    <li class='border-elem'><NavigationItem props={['search', 'icon-search', 'search']}></NavigationItem></li>
    <li><NavigationItem props={['profile', userpic, ['D. Kargaev', 367, 32], 'icon-arrow-up-right']}></NavigationItem></li>
    <li class='border-elem'><NavigationItem props={['button', 'icon-more-horizontal', 'other']}></NavigationItem></li>
  </ul>
}

export default Navigation;