import NavigationItem from "./NavigationItem";
import logo from "./../images/Logo.png";
import userpic from "./../images/Rectangle.png";
import icomoon from "./../fonts/icomoon/style.css";

function Navigation() {
  let items = [
    { type: "logo", img: logo, class: "border-elem" },
    { type: "space-div" },
    { type: "button", icon: "icon-rss", caption: "feed" },
    { type: "button", icon: "icon-users", caption: "network" },
    { type: "button", icon: "icon-briefcase", caption: "jobs" },
    { type: "button", icon: "icon-message-square", caption: "chat" },
    { type: "button", icon: "icon-bell", caption: "notices" },
    { type: "space-div" },
    {
      type: "search",
      icon: "icon-search",
      caption: "search",
      class: "border-elem",
    },
    {
      type: "profile",
      userpic: userpic,
      info: { name: "D. Kargaev", views: 367, diff: 32 },
    },
    {
      type: "button",
      icon: "icon-more-horizontal",
      caption: "other",
      class: "border-elem",
    },
  ];

  return (
    <ul className="Navigation">
      {items.map((element) => {
        return (
          <li className={element.class}>
            <NavigationItem params={element} />
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;
