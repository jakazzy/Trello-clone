import React from "react";

const Modal = ({ task, handleChange, isOpen, values, handleClose }) => {
  return (
    <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
      <span onClick={handleClose} className="close">
        &times;
      </span>
      <textarea
        className="modal-content"
        name=""
        cols="23"
        rows="1"
        autoFocus
        onChange={event => handleChange(event, task)}
        value={values.content}
        placeholder={task.content}
      ></textarea>
    </div>
  );
};

export default Modal;
