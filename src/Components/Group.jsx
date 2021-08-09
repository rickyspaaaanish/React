function Group({ params }) {
  return (
    <div className="group">
      <img src={params.img} alt="" />
      <span className="group__name text__middle text__bold">
        {params.groupname}
      </span>
    </div>
  );
}

export default Group;
