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
  playerTurn,
  maxTotal,
  maxTake,
}) {
  return (
    <div className="main">
      <Player
        playerCount={playerCount}
        changeTurn={changeTurn}
        totalCount={totalCount}
        maxTake={maxTake}
      />

      <PlayingField totalCount={totalCount} />

      <Enemy
        enemyCount={enemyCount}
        changeTurn={changeTurn}
        playerTurn={playerTurn}
        totalCount={totalCount}
        maxTotal={maxTotal}
        maxTake={maxTake}
      />
    </div>
  );
}

Main.propTypes = {
  playerCount: PropTypes.number.isRequired,
  enemyCount: PropTypes.number.isRequired,
  changeTurn: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  playerTurn: PropTypes.bool.isRequired,
  maxTotal: PropTypes.number.isRequired,
  maxTake: PropTypes.number.isRequired,
};

export default Main;
