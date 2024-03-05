const Homepage = ({ isLoggedIn }) => {
  let content;

  if (isLoggedIn) {
    content = <p>You are logged in</p>;
  } else {
    content = <p>You are logged out</p>;
  }

  return <div>{content}</div>;
};

export default Homepage;
