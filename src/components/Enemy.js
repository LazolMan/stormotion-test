import React, { useEffect, useState } from "react";

export default function Player({ count, changeTurn, playerTurn, totalCount }) {
  const [maxValue, setMaxValue] = useState(3);

  useEffect(() => {
    totalCount <= maxValue ? setMaxValue(totalCount) : setMaxValue(3);

    botTurn();
  }, [playerTurn]);

  const botTurn = () => {
    if (!playerTurn) {
      const value = Math.floor(Math.random() * 0 + 1);
      console.log(`Соперник взял ${value} спички`);
      changeTurn(value);
    }
  };

  return (
    <div className="player">
      <h2 className="player__name">Противник</h2>
      <p className="player__count">Кол-во спичек: {count}</p>
    </div>
  );
}
