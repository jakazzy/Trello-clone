import React from "react";

export const getCard = (
  value,
  handleEvent,
  handleChange,
  values,
  handleSubmit
) => {
  if (value.content) {
    return (
      <li className="card">
        <span className="card-info">{value.content}</span>
      </li>
    );
  } else if (!value.content && value.focus) {
    return (
      <form
        className="new-card"
        id="content-form"
        onBlur={() => handleEvent(value)}
        onKeyDown={handleSubmit}
      >
        <li className="card">
          <span className="card-info">
            <textarea
              rows="1"
              cols="23"
              autoFocus
              id="card-input"
              placeholder="Enter a title for this card..."
              value={values.content}
              onChange={handleChange}
              name="content-text"
              form="content-form"
            ></textarea>
          </span>
        </li>
        <button type="submit">{value.button}</button>
      </form>
    );
  } else if (!value.content && !value.focus) {
    return null;
  }
};
