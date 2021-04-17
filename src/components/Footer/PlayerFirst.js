import React from "react";

export default function PlayerFirst({ playerFirst, setPlayerFirst }) {
  return (
    <div className="footer__player-first player-first">
      <p className="player-first__title">
        Первый ходит:
        <span className="player-first__name">
          {playerFirst ? " Игрок" : " Противник"}
        </span>
      </p>
      <button className="button" onClick={() => setPlayerFirst(true)}>
        Игрок
      </button>
      <button className="button" onClick={() => setPlayerFirst(false)}>
        Противник
      </button>
    </div>
  );
}
