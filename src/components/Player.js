import React, { useEffect, useState } from "react";

export default function Player({ count, changeTurn, playerTurn, totalCount }) {
  const buttons = [];
  const [maxValue, setMaxValue] = useState(3);

  useEffect(() => {
    totalCount > maxValue ? setMaxValue(3) : setMaxValue(totalCount);
  }, [totalCount]);

  for (let value = 1; value <= maxValue; value++) {
    buttons.push(
      <button onClick={() => changeTurn(value)} key={value}>
        {value}
      </button>
    );
  }

  return (
    <div className="player">
      <h2 className="player__name">Игрок</h2>
      <p className="player__count">Кол-во спичек: {count}</p>

      <div className="buttos-box">{buttons}</div>
    </div>
  );
}
