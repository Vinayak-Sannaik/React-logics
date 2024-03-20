import {useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [buttonToggle, setButtonToggle] = useState(false);

  const handleButton = () => {
    if (count == 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const handleOnOff = () => {
    if (buttonToggle === false) {
      setButtonToggle(true);
    } else {
      setButtonToggle(false);
    }
  };

  return (
    <>
      <p>Count is {count}</p>
      <button type="button" onClick={handleButton}>
        Count
      </button>
      <br />
      <hr />
      <button
        style={{ backgroundColor: buttonToggle ? "yellow" : "red" }}
        onClick={handleOnOff}
      >
        {buttonToggle ? "on" : "off"}
      </button>
    </>
  );
};

export default UseState;
