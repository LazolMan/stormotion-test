import React, { useMemo } from "react";

export default function PlayingField({ totalCount }) {
  const items = useMemo(() => Array(totalCount).fill(0), [totalCount]);

  return (
    <div className="playing-field">
      <h2 className="playing-field__title title">
        Количество спичек: {totalCount}
      </h2>

      <div className="playing-field__list">
        {items.map((_, index) => {
          return (
            <p className="playing-field__item" key={index}>
              &#128293;
            </p>
          );
        })}
      </div>
    </div>
  );
}
