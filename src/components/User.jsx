import "./User.scss";

const User = () => {
  const user = {
    name: "Hedy Lamarr",
    imgUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imgSize: 90,
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <img
        src={user.imgUrl}
        alt={"Photo of " + user.name}
        style={{ width: "90", height: "90" }}
        className="avatar"
      />
    </div>
  );
};

export default User;
