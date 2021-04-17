import React from "react";
import PropTypes from "prop-types";

import Player from "./Player";
import PlayingField from "./PlayingField";
import Enemy from "./Enemy";

function Main({
  playerCount,
  enemyCount,
  changeTurn,
  totalCount,
  setEndGame,
  playerTurn,
  maxTake,
}) {
  return (
    <div className="main">
      <Player
        playerCount={playerCount}
        changeTurn={changeTurn}
        setEndGame={setEndGame}
        maxTake={maxTake}
        totalCount={totalCount}
      />

      <PlayingField totalCount={totalCount} />

      <Enemy
        enemyCount={enemyCount}
        changeTurn={changeTurn}
        playerTurn={playerTurn}
        maxTake={maxTake}
        totalCount={totalCount}
      />
    </div>
  );
}

Main.propTypes = {
  playerCount: PropTypes.number.isRequired,
  enemyCount: PropTypes.number.isRequired,
  changeTurn: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  setEndGame: PropTypes.func.isRequired,
  playerTurn: PropTypes.bool.isRequired,
  maxTake: PropTypes.number.isRequired,
};

export default Main;
