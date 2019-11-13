import React from "react";

const Modal = ({
  task,
  handleChange,
  isOpen,
  values,
  handleClose,
  position
}) => {
  console.log(position, "here you are");
  return (
    <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
      <span onClick={handleClose} className="close">
        &times;
      </span>
      <div className="modal-wrapper">
        <textarea
          className="modal-content"
          style={{
            top: position.modalTop ? position.modalTop : undefined,
            left: position.modalLeft ? position.modalLeft : undefined
          }}
          name=""
          cols="23"
          rows="1"
          autoFocus
          onChange={event => handleChange(event, task)}
          value={values.content}
          placeholder={task.content}
        ></textarea>
      </div>
    </div>
  );
};

export default Modal;
