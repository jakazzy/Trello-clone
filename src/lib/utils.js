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
        onBlur={event => handleEvent(event, value)}
        onKeyDown={event => handleSubmit(event)}
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
              onChange={event => handleChange(event, value)}
              name="content-text"
              form="content-form"
            ></textarea>
          </span>
        </li>
        <button
          type="button"
          onSubmit={event => {
            handleSubmit(event);
          }}
        >
          {value.button}
        </button>
      </form>
    );
  } else if (!value.content && !value.focus) {
    return null;
  }
};
