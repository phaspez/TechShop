import { useState } from "react";
function Test() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={increment}> click me! </button>
      <p>count is {count}</p>
    </>
  );
}

export default Test;
