import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import "../game.css";

function Game() {
  const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [current, setCurrent] = useState(0); // 0 = player1(Círculo), 1 = player2(X)
  const [winner, setWinner] = useState(0); // 0 = ninguém venceu ainda, 1 = player1 venceu, 2 = player2 venceu, 3 = ninguém venceu

  useEffect(() => {
    if (winner !== 0) {
      console.log("O jogo acabou");
    }
  }, [winner]);

  function handleValidWinner(currentData) {
    const validate = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // [1, 2, 0, 2]
    // [1, 2, 2]

    for (let a = 0; a < validate.length; a++) {
      const arr = validate[a];
      let aux = 0;
      let ok = true;
      for (let i = 0; i < arr.length; i++) {
        let index = arr[i];
        if (currentData[index] === 0) {
          ok = false;
          break;
        }

        if (i === 0) aux = currentData[index];
        else if (currentData[index] !== aux) {
          ok = false;
          break;
        }
      }

      if (ok) {
        console.log("acabou");
        setWinner(aux);
        return;
      }
    }

    if (currentData.filter((x) => x === 0).length === 0) {
      setWinner(3);
    }
  }

  function handleClick(e, { identifier, index }) {
    if (winner !== 0) {
      setWinner(0);
      setData([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }

    if (data[index] !== 0) return;
    setData((value) => {
      const newValue = value;
      newValue[index] = current == 0 ? 1 : 2;

      handleValidWinner(newValue);
      return newValue;
    });
    setCurrent((value) => {
      const newCurrent = value === 0 ? 1 : 0;
      return newCurrent;
    });
  }

  return (
    <>
      <h1>
        {winner === 0
          ? "Jogo rolando"
          : winner === 1
          ? "bicha o jogador 1 ganhou"
          : winner === 2
          ? "mulher qm ganhou foi o 2"
          : "povo abestado nenhum ganhou"}
      </h1>
      <div className="grid">
        {data.map((n, index) => {
          return (
            <Cell
              onClick={(e) => handleClick(e, { identifier: n, index })}
              key={index}
              selected={n}
            />
          );
        })}
      </div>
    </>
  );
}

export default Game;
