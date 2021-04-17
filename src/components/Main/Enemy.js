import React, { useEffect } from "react";

export default function Enemy({
  enemyCount,
  changeTurn,
  playerTurn,
  maxTake,
  totalCount,
}) {
  useEffect(() => {
    if (!playerTurn) {
      const maxValue = totalCount < maxTake ? totalCount : maxTake;
      const value = Math.floor(Math.random() * maxValue + 1);
      changeTurn(value);
    }
  }, [playerTurn]);

  return (
    <div className="player">
      <h2 className="player__title title">Противник</h2>
      <p className="player__count">Количество спичек: {enemyCount}</p>
    </div>
  );
}
