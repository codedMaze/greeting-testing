import React, { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>It's good to see you! </p>}
      {changedText && <p>changed! </p>}
      <button onClick={changeHandler}>Change</button>
    </div>
  );
};

export default Greeting;
