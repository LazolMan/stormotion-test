import React, { useEffect, useState } from "react";

export default function Player({
  playerCount,
  changeTurn,
  totalCount,
  setEndGame,
  maxTake,
}) {
  const buttons = [];
  const [maxValue, setMaxValue] = useState(3);

  useEffect(() => {
    setMaxValue(totalCount < maxValue ? totalCount : maxTake);
  }, [totalCount]);

  for (let value = 1; value <= maxValue; value++) {
    buttons.push(
      <button
        className="player__button button"
        onClick={() => {
          changeTurn(value);
          setEndGame(false);
        }}
        key={value}
      >
        Взять {value}
      </button>
    );
  }

  return (
    <div className="player">
      <h2 className="player__title title">Игрок</h2>
      <p className="player__count">Количество спичек: {playerCount}</p>

      <div className="player__button-box">{buttons}</div>
    </div>
  );
}
