import React from "react";
import PropTypes from "prop-types";

import PlayerFirst from "./PlayerFirst";
import Result from "./Result";
import Form from "./Form";

function Footer({
  playerFirst,
  setPlayerFirst,
  submitInput,
  playerWin,
  endGame,
}) {
  return (
    <footer className="footer">
      <PlayerFirst playerFirst={playerFirst} setPlayerFirst={setPlayerFirst} />

      {endGame && playerWin !== null &&  <Result playerWin={playerWin} />}

      <Form submitInput={submitInput} />
    </footer>
  );
}

Footer.propTypes = {
  playerFirst: PropTypes.bool.isRequired,
  setPlayerFirst: PropTypes.func.isRequired,
  submitInput: PropTypes.func.isRequired,
  playerWin: PropTypes.bool,
  endGame: PropTypes.bool.isRequired,
};

export default Footer;
