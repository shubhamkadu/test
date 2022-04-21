import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setTimeout(() => {});
    setCount(+1);
  };

  const decrease = () => {
    setCount((next) => {
      if (next <= 0) {
        return 0;
      }
      return next - 1;
    });
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
}
