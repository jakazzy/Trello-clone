import React from "react";
import Modal from "../components/modal/Modal";

function GetCard({
  task,
  handleBlur,
  handleChange,
  values,
  handleSubmit,
  handleClick,
  isOpen,
  handleClose,
  position
}) {
  if (task.content) {
    return (
      <div className="card-modal-container">
        <Modal
          key={task.id}
          task={task}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isOpen={isOpen}
          values={values}
          handleClose={handleClose}
          position={position}
        />

        <li className="card">
          <p className="card-edit" onClick={event => handleClick(event)}>
            edit
          </p>
          <span className="card-info">{task.content}</span>
        </li>
      </div>
    );
  } else if (!task.content && task.focus) {
    return (
      <form
        className="new-card"
        id="content-form"
        name="content-form"
        onBlur={event => handleBlur(event, task)}
        onKeyDown={event => handleSubmit(event)}
      >
        <li className="card">
          <span className="card-info">
            <textarea
              rows="1"
              cols="23"
              autoFocus
              id="content-text"
              placeholder="Enter a title for this card..."
              value={values.content}
              onChange={event => handleChange(event, task)}
              name="content-text"
              form="content-form"
            ></textarea>
          </span>
        </li>
        <button
          type="button"
          id="add-card-button"
          onMouseDown={event => {
            event.preventDefault();
            handleSubmit(event);
          }}
          // onMouseDown={event => {
          //   event.preventDefault();
          //   console.log(event.target.id);
          // }}
        >
          {task.button}
        </button>
      </form>
    );
  } else if (!task.content && !task.focus) {
    return null;
  }
}

export default GetCard;
