import React from "react";

export default function PlayingField({ totalCount }) {
  const items = [];

  for (let i = 0; i < totalCount; i++) {
    items.push(
      <p className="playing-field__item" key={i}>
        &#128293;
      </p>
    );
  }

  return (
    <div className="playing-field">
      <h2 className="playing-field__title">Количество спичек: {totalCount}</h2>

      <div className="playing-field__list">{items}</div>
    </div>
  );
}
