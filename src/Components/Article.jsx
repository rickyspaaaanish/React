function Article({ params }) {
  return (
    <div className="aricle">
      <img src={params.img} alt="" />
      <div className="article__desription">
        <span className="text__middle text__bold">{params.name}</span>
        <span className="text__xsmall">
          {params.viewers.toLocaleString("en-IN", {
            maximumSignificantDigits: 3,
          }) + " viewers"}
        </span>
      </div>
    </div>
  );
}

export default Article;
