function FooterMenuItem({ params }) {
  switch (params[0]) {
    case "link":
      return (
        <a className="footer__link text__small" href="">
          {params[1]}
        </a>
      );
    case "button":
      return (
        <button className={"footer__button " + params[1]}>
          {params[2].toUpperCase()}
          <span className={params[3]}></span>
        </button>
      );
    case "select":
      const options = [];
      params[1].forEach((element) => {
        options.push(
          <option className="text__small text__bold">
            {element.toUpperCase()}
          </option>
        );
      });
      return (
        <select className="language__select text__small text__bold">
          {options}
        </select>
      );
    default:
      return;
  }
}

export default FooterMenuItem;
