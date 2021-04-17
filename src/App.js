import React, { useState, useEffect } from "react";

import PlayingField from "./components/PlayingField";
import Player from "./components/Player";
import Enemy from "./components/Enemy";

function App() {
  const [totalCount, setTotalCount] = useState(25);
  const [playerCount, setPlayerCount] = useState(0);
  const [enemyCount, setEnemyCount] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [playerWin, setPlayerWin] = useState(false);
  const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    console.log(`Осталось ${totalCount} спичек`);
    if (totalCount === 0) {
      if (playerCount % 2 === 0) {
        setPlayerWin(true);
      } else {
        setPlayerWin(false);
      }

      console.log(playerWin);

      reset();
    } else if (totalCount < 0) {
      console.log(`Ошибка, количество спичек ${totalCount}`);
    }
  }, [totalCount]);

  const changeTurn = (value) => {
    setTotalCount(totalCount - value);

    playerTurn
      ? setPlayerCount(playerCount + value)
      : setEnemyCount(enemyCount + value);

    setPlayerTurn(!playerTurn);
    setEndGame(false);
  };

  const reset = () => {
    setTotalCount(25);
    setPlayerCount(0);
    setEnemyCount(0);
    setPlayerTurn(true);
    setEndGame(true);
  };

  return (
    <>
      <div className="main">
        <Player
          count={playerCount}
          changeTurn={changeTurn}
          playerTurn={playerTurn}
          totalCount={totalCount}
        />

        <PlayingField totalCount={totalCount} />

        <Enemy
          count={enemyCount}
          changeTurn={changeTurn}
          playerTurn={playerTurn}
          totalCount={totalCount}
        />
      </div>

      {endGame && (
        <h2 className="result-text">
          Вы {playerWin ? "победили" : "проиграли"}
        </h2>
      )}
    </>
  );
}

export default App;
