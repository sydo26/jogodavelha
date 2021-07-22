import React from "react";
import CircleComponent from "./Circle";
import XComponent from "./X";

function Cell({ selected = 0, onClick = () => null }) {
  function handleClick(e) {
    onClick(e);
  }

  return (
    <div
      onClick={handleClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#333333",
        borderRadius: 10,
        width: 100,
        height: 100,
      }}
    >
      {selected === 1 ? (
        <CircleComponent />
      ) : selected === 2 ? (
        <XComponent />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Cell;
