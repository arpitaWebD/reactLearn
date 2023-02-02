import React, { useEffect, useState } from "react";
import "../App.css";

function search() {
    const [counter, setCounter] = useState(0);

  return (
    <div>
        <h2>Counter</h2>
        <div>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    </div>
  );
}

export default search;
