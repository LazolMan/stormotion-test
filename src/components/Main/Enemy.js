import React, { useEffect } from "react";
import useEnemyTurn from "../../hooks/useEnemyTurn";

export default function Enemy({
  enemyCount,
  changeTurn,
  playerTurn,
  totalCount,
  maxTotal,
  maxTake,
}) {
  const enemyTurn = useEnemyTurn(totalCount, enemyCount, maxTotal, maxTake);

  useEffect(() => {
    if (!playerTurn) {
      changeTurn(enemyTurn);
    }
  }, [playerTurn, changeTurn, enemyTurn]);

  return (
    <div className="player">
      <h2 className="player__title title">Противник</h2>
      <p className="player__count">Количество спичек: {enemyCount}</p>
    </div>
  );
}
