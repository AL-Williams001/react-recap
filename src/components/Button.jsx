import "./Button.scss";
import { useState } from "react";

const Button = () => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return <button onClick={handleClick}>{counter}</button>;
};

export default Button;
