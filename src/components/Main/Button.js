import React from "react";

export default function Button({ changeTurn, value }) {
  return (
    <button
      className="player__button button"
      onClick={() => {
        changeTurn(value);
      }}
    >
      Взять {value}
    </button>
  );
}
