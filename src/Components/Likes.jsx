function Likes({ likes, liked, onClick, icon }) {
  return (
    <button
      className={"controls__line-button " + icon}
      onClick={onClick}
    >
      <span className="text__middle text__bold">{likes}</span>
    </button>
  );
}

export default Likes;
