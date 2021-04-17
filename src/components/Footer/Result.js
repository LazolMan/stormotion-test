import React from "react";

export default function Result({ playerWin }) {
  return (
    <h2 className="footer__result-text title">
      Вы {playerWin ? "победили!" : "проиграли!"}
    </h2>
  );
}
