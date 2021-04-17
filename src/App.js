import React, { useState, useEffect } from "react";

import { Main, Footer } from "./components/";

function App() {
  const [totalCount, setTotalCount] = useState(25);
  const [playerCount, setPlayerCount] = useState(0);
  const [enemyCount, setEnemyCount] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [playerWin, setPlayerWin] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [playerFirst, setPlayerFirst] = useState(true);
  const [maxTotal, setMaxTotal] = useState(25);
  const [maxTake, setMaxTake] = useState(3);

  useEffect(() => {
    if (totalCount <= 0) {
      setTotalCount(maxTotal);
      setPlayerCount(0);
      setEnemyCount(0);
      setPlayerWin(playerCount % 2 === 0);
      setEndGame(true);
    }
  }, [totalCount]);

  useEffect(() => {
    setPlayerTurn(playerFirst);
  }, [endGame]);

  useEffect(() => {
    if (totalCount === maxTotal) {
      setPlayerTurn(playerFirst);
    }
  }, [playerFirst]);

  const changeTurn = (value) => {
    setTotalCount(totalCount - value);

    playerTurn
      ? setPlayerCount(playerCount + value)
      : setEnemyCount(enemyCount + value);

    setPlayerTurn(!playerTurn);
  };

  const submitInput = (maxTotalInput, maxTakeInput) => {
    if (endGame || totalCount === maxTotal) {
      setMaxTotal(maxTotalInput);
      setTotalCount(maxTotalInput);
      setMaxTake(maxTakeInput);
      setPlayerCount(0);
      setEnemyCount(0);
    }
  };

  return (
    <div className="wrapper">
      <Main
        playerCount={playerCount}
        enemyCount={enemyCount}
        changeTurn={changeTurn}
        totalCount={totalCount}
        setEndGame={setEndGame}
        playerTurn={playerTurn}
        maxTake={maxTake}
      />

      <Footer
        setPlayerFirst={setPlayerFirst}
        playerFirst={playerFirst}
        submitInput={submitInput}
        playerWin={playerWin}
        endGame={endGame}
      />
    </div>
  );
}

export default App;
