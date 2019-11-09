import React from "react";

export const getCard = (value, handleEvent) => {
  if (value.content) {
    return (
      <li className="card">
        <span className="card-info">{value.content}</span>
      </li>
    );
  } else if (!value.content && value.focus) {
    return (
      <div className="new-card" onBlur={() => handleEvent(value)}>
        <li className="card">
          <span className="card-info">
            <textarea
              rows="1"
              cols="23"
              autoFocus
              placeholder="Enter a title for this card..."
            ></textarea>
          </span>
        </li>
        <button type="submit">{value.button}</button>
      </div>
    );
  } else if (!value.content && !value.focus) {
    return null;
  }
};
