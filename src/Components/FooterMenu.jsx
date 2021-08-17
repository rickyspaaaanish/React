import logo from "./../images/Logo.png";
import FooterMenuItem from "./FooterMenuItem";
import styles from "./../styles/FooterMenu.module.css";
import textstyles from "./../styles/text.module.css";
import classNames from "classnames";
import { nanoid } from "nanoid";

function FooterMenu() {
  let buttons = [
    {
      id: nanoid(),
      type: "button",
      color: "blue",
      caption: "Questions?",
      icon: "icon-help-circle",
    },
    {
      id: nanoid(),
      type: "button",
      color: "white",
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
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <div
          className={classNames(
            textstyles.middle,
            textstyles.bold,
            styles.logo__label
          )}
        >
          Linked<span className={textstyles.blue}>In</span>
        </div>
      </div>
      <div className={styles.item}>
        <div>
          <span
            className={classNames(
              styles.list__header,
              textstyles.small,
              textstyles.bold
            )}
          >
            Navigation
          </span>
          <div className={styles.item}>
            <ul className={styles.list}>
              {links.slice(0, 4).map((element) => {
                return <FooterMenuItem params={element} key={element.id} />;
              })}
            </ul>
            <ul className={styles.list}>
              {links.slice(4, 8).map((element) => {
                return <FooterMenuItem params={element} key={element.id} />;
              })}
            </ul>
            <ul className={styles.list}>
              {links.slice(8).map((element) => {
                return <FooterMenuItem params={element} key={element.id} />;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={classNames(styles.item, styles.controls)}>
        <span
          className={classNames(
            styles.list__header,
            textstyles.small,
            textstyles.bold
          )}
        >
          Fast access
        </span>
        <ul className={styles.list}>
          {buttons.map((element) => {
            return <FooterMenuItem params={element} key={element.id} />;
          })}
        </ul>
      </div>
      <div className={classNames(styles.item, styles.controls)}>
        <span
          className={classNames(
            styles.list__header,
            textstyles.small,
            textstyles.bold
          )}
        >
          Language
        </span>
        <ul className={styles.list}>
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
