import React, { useState, useEffect, useMemo, useCallback } from "react";

import { Main, Footer } from "./components/";

function App() {
  const [playerCount, setPlayerCount] = useState(0);
  const [enemyCount, setEnemyCount] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [playerWin, setPlayerWin] = useState(null);
  const [playerFirst, setPlayerFirst] = useState(true);
  const [maxTotal, setMaxTotal] = useState(25);
  const [maxTake, setMaxTake] = useState(3);

  const totalCount = useMemo(() => maxTotal - playerCount - enemyCount, [
    maxTotal,
    playerCount,
    enemyCount,
  ]);

  const endGame = useMemo(() => totalCount > maxTotal - maxTake, [
    totalCount,
    maxTotal,
    maxTake,
  ]);

  useEffect(() => {
    if (totalCount <= 0) {
      setPlayerCount(0);
      setEnemyCount(0);
      setPlayerWin(playerCount % 2 === 0);
    }
  }, [totalCount, playerCount]);

  useEffect(() => {
    setPlayerTurn(playerFirst);
  }, [endGame, playerFirst]);

  useEffect(() => {
    if (totalCount === maxTotal) {
      setPlayerTurn(playerFirst);
    }
  }, [playerFirst, totalCount, maxTotal]);

  const changeTurn = useCallback(
    (value) => {
      playerTurn
        ? setPlayerCount(playerCount + value)
        : setEnemyCount(enemyCount + value);

      setPlayerTurn(!playerTurn);
    },
    [playerTurn, playerCount, enemyCount]
  );

  const submitInput = useCallback(
    (maxTotalInput, maxTakeInput) => {
      if (endGame || totalCount === maxTotal) {
        setMaxTotal(maxTotalInput);
        setMaxTake(maxTakeInput);
        setPlayerCount(0);
        setEnemyCount(0);
      }
    },
    [endGame, totalCount, maxTotal]
  );

  return (
    <div className="wrapper">
      <Main
        playerCount={playerCount}
        enemyCount={enemyCount}
        changeTurn={changeTurn}
        totalCount={totalCount}
        playerTurn={playerTurn}
        maxTotal={maxTotal}
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
