import logo from "./../images/Logo.png";
import FooterMenuItem from "./FooterMenuItem";
import { nanoid } from "nanoid";

function FooterMenu() {
  let buttons = [
    {
      id: nanoid(),
      type: "button",
      class: "button__blue",
      caption: "Questions?",
      icon: "icon-help-circle",
    },
    {
      id: nanoid(),
      type: "button",
      class: "button__white",
      caption: "Settings",
      icon: "icon-settings",
    },
  ];

  let links = [
    { id: nanoid(), type: "link", caption: "About" },
    { id: nanoid(), type: "link", caption: "Careers" },
    { id: nanoid(), type: "link", caption: "Advertising" },
    { id: nanoid(), type: "link", caption: "Small Business" },
    { id: nanoid(), type: "link", caption: "Talent Solutions" },
    { id: nanoid(), type: "link", caption: "Marketing Solutions" },
    { id: nanoid(), type: "link", caption: "Sales Solutions" },
    { id: nanoid(), type: "link", caption: "Safety Center" },
    { id: nanoid(), type: "link", caption: "Community Guidelines" },
    { id: nanoid(), type: "link", caption: "Privacy & Terms" },
    { id: nanoid(), type: "link", caption: "Mobile App" },
  ];

  return (
    <div className="footer">
      <div className="footer__item-logo">
        <img src={logo} alt="" />
        <div className="text__middle text__bold footer__logo-text">
          Linked<span className="blue-text">In</span>
        </div>
      </div>
      <div className="footer__item">
        <div>
          <span className="list__header text__small text__bold">
            Navigation
          </span>
          <div className="footer__item">
            <ul className="footer__list">
              {links.slice(0, 4).map((element) => {
                return <FooterMenuItem params={element} key={element.id} />;
              })}
            </ul>
            <ul className="footer__list">
              {links.slice(4, 8).map((element) => {
                return <FooterMenuItem params={element} key={element.id} />;
              })}
            </ul>
            <ul className="footer__list">
              {links.slice(8).map((element) => {
                return <FooterMenuItem params={element} key={element.id} />;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__item footer__navigation-controls">
        <span className="list__header text__small text__bold">Fast access</span>
        <ul className="footer__list">
          {buttons.map((element) => {
            return <FooterMenuItem params={element} key={element.id} />;
          })}
        </ul>
      </div>
      <div className="footer__item footer__navigation-controls">
        <span className="list__header text__small text__bold">Language</span>
        <ul className="footer__list">
          <li>
            <FooterMenuItem
              params={{
                type: "select",
                options: ["English", "Russian", "German", "Spanish"],
              }}
              key={nanoid()}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterMenu;
