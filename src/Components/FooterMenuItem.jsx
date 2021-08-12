function FooterMenuItem({ params }) {
  switch (params.type) {
    case "link":
      return (
        <li className="footer__list-item">
          <a className="footer__link text__small" href="">
            {params.caption}
          </a>
        </li>
      );
    case "button":
      return (
        <li>
          <button className={"footer__button " + params.class}>
            {params.caption.toUpperCase()}
            <span className={params.icon}></span>
          </button>
        </li>
      );
    case "select":
      return (
        <select className="language__select text__small text__bold">
          {params.options.map((element) => {
            return (
              <option className="text__small text__bold">
                {element.toUpperCase()}
              </option>
            );
          })}
        </select>
      );
    default:
      return;
  }
}

export default FooterMenuItem;
