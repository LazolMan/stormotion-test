import React, { useMemo } from "react";
import Button from "./Button";

export default function Player({
  playerCount,
  changeTurn,
  totalCount,
  maxTake,
}) {
  const maxValue = useMemo(
    () => (totalCount < maxTake ? totalCount : maxTake),
    [totalCount, maxTake]
  );

  const bttns = useMemo(() => Array(maxValue).fill(0), [maxValue]);

  return (
    <div className="player">
      <h2 className="player__title title">Игрок</h2>
      <p className="player__count">Количество спичек: {playerCount}</p>

      <div className="player__button-box">
        {bttns.map((_, index) => (
          <Button changeTurn={changeTurn} value={index + 1} key={index} />
        ))}
      </div>
    </div>
  );
}
