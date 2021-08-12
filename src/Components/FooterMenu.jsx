import logo from "./images/Logo.png";
import FooterMenuItem from "./FooterMenuItem";

function FooterMenu() {
  let buttons = [
    {
      type: "button",
      class: "button__blue",
      caption: "Questions?",
      icon: "icon-help-circle",
    },
    {
      type: "button",
      class: "button__white",
      caption: "Settings",
      icon: "icon-settings",
    },
  ];

  let links = [
    { type: "link", caption: "About" },
    { type: "link", caption: "Careers" },
    { type: "link", caption: "Advertising" },
    { type: "link", caption: "Small Business" },
    { type: "link", caption: "Talent Solutions" },
    { type: "link", caption: "Marketing Solutions" },
    { type: "link", caption: "Sales Solutions" },
    { type: "link", caption: "Safety Center" },
    { type: "link", caption: "Community Guidelines" },
    { type: "link", caption: "Privacy & Terms" },
    { type: "link", caption: "Mobile App" },
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
                return <FooterMenuItem params={element} />;
              })}
            </ul>
            <ul className="footer__list">
              {links.slice(4, 8).map((element) => {
                return <FooterMenuItem params={element} />;
              })}
            </ul>
            <ul className="footer__list">
              {links.slice(8).map((element) => {
                return <FooterMenuItem params={element} />;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__item footer__navigation-controls">
        <span className="list__header text__small text__bold">Fast access</span>
        <ul className="footer__list">
          {buttons.map((element) => {
            return <FooterMenuItem params={element} />;
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
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterMenu;
