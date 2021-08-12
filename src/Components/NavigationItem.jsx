function NavigationItem({ params }) {
  switch (params.type) {
    case "logo":
      return <img src={params.img} alt="" className={params.type} />;
    case "button":
      return (
        <button className={params.type}>
          <span className={"navigation__item-icon " + params.icon} />
          {params.caption.toUpperCase()}
        </button>
      );
    case "search":
      return (
        <div className={params.type}>
          <span className={"navigation__item-icon " + params.icon} />
          <span className="search-label">
            {params.caption.charAt(0).toUpperCase() + params.caption.slice(1)}
          </span>
        </div>
      );
    case "profile":
      return (
        <div className={params.type}>
          <img src={params.userpic} alt="" />
          <div className="profile__info">
            <div className="profile__info-line">
              <span className="text__small text__bold">
                {params.info.name.toUpperCase()}
              </span>
              <span className="text__small you-label">YOU</span>
            </div>
            <div className="profile__info-line">
              <span className="text__small views-count">
                {params.info.views + " views today"}
              </span>
              <div className={"text__small difference-label"}>
                {params.info.diff >= 0
                  ? "+" + params.info.diff
                  : params.info.diff}
                <span className={"text__small icon-arrow-up-right"} />
              </div>
            </div>
          </div>
        </div>
      );
    case "space-div":
      return <div className={params.type} />;
    default:
      return;
  }
}

export default NavigationItem;
