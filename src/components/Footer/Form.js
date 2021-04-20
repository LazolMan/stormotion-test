import React, { useState, useCallback } from "react";

export default function Form({ submitInput }) {
  const [maxTotalInput, setMaxTotalInput] = useState("");
  const [maxTakeInput, setMaxTakeInput] = useState("");

  const handleMaxTotalChange = (e) => {
    if (e.target.value >= 0) {
      setMaxTotalInput(e.target.value);
    }
  };

  const handleMaxTakeChange = (e) => {
    if (e.target.value >= 0) {
      setMaxTakeInput(e.target.value);
    }
  };

  const handleSubmitInput = useCallback(
    (e) => {
      e.preventDefault();

      if (maxTotalInput % 2 !== 0 && maxTakeInput > 0) {
        submitInput(+maxTotalInput, +maxTakeInput);
      }
    },
    [maxTotalInput, maxTakeInput, submitInput]
  );

  return (
    <div className="footer__form">
      <h3 className="footer__form-title">Настройки</h3>

      <form className="form" onSubmit={(e) => handleSubmitInput(e)}>
        <input
          className="form__input"
          placeholder="Количество спичек"
          type="number"
          value={maxTotalInput}
          onChange={(e) => handleMaxTotalChange(e)}
        />
        <input
          className="form__input"
          placeholder="Разрешено взять"
          type="number"
          value={maxTakeInput}
          onChange={(e) => handleMaxTakeChange(e)}
        />

        <button
          className="form__button button"
          onClick={(e) => handleSubmitInput(e)}
        >
          Применить
        </button>
      </form>
    </div>
  );
}
