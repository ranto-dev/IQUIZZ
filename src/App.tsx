import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Hello, counter</h1>
      <p>Your value: {count} </p>
      <button onClick={handleClick}>Inscrement</button>
    </div>
  );
}
