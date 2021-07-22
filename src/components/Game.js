import React, { useState } from "react";
import Cell from "./Cell";
import "../game.css";

function Game() {
  const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [current, setCurrent] = useState(0); // 0 = player1(Círculo), 1 = player2(X)

  // array 2d
  // 0 0 0
  // 0 0 0
  // 0 0 0

  // Erro de não renderizar ( resolver )

  function handleClick(e, { identifier, index }) {
    setData((value) => {
      const newValue = value;
      newValue[index] = current == 0 ? 1 : 2;
      console.log(newValue);
      return newValue;
    });
  }

  return (
    <div className="grid">
      {data.map((n, index) => {
        console.log(n, index);
        return (
          <Cell
            onClick={(e) => handleClick(e, { identifier: n, index })}
            key={index}
            selected={n}
          />
        );
      })}
    </div>
  );
}

export default Game;
