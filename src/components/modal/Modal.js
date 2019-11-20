import React from "react";

const Modal = ({
  task,
  handleChange,
  isOpen,
  values,
  handleClose,
  position,
  handleSubmit,
  handleDelete,
  handleMove,
  isMove
}) => {
  return (
    <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
      <span onClick={handleClose} className="close">
        &times;
      </span>
      <div
        className="modal-wrapper"
        onKeyDown={event => handleSubmit(event)}
        style={{
          top: position.modalTop ? `${position.modalTop}px` : undefined,
          left: position.modalLeft ? `${position.modalLeft}px` : undefined
        }}
      >
        {console.log(position, "this is the position")}
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
        <div className="modal-actions-wrapper">
          <div className="modal-actions" onClick={() => handleDelete(task)}>
            Delete
          </div>
          <div onClick={handleMove} className="modal-actions">
            Move
          </div>
        </div>
      </div>
      <div
        className="move-actions"
        style={{
          top: position.modalTop ? `${position.modalTop + 99}px` : undefined,
          left: position.modalLeft
            ? `${position.modalLeft + 246}px`
            : undefined,
          display: isMove ? "block" : "none"
        }}
      >
        <span className="move-actions-title">Move Card</span>
        <div className="select-actions">
          <div className="actions-content" style={{ flexGrow: 2.5 }}>
            <label>Column</label>
            <select name="select-column" className="column-options">
              <option value="car">car</option>
              <option value="car">car</option>
              <option value="car">car</option>
              <option value="car">car</option>
            </select>
          </div>
          <div className="actions-content">
            <label>Position</label>
            <select name="select-column" className="column-options">
              <option value="car">car</option>
              <option value="car">car</option>
              <option value="car">car</option>
              <option value="car">car</option>
            </select>
          </div>
        </div>

        <button type="submit">Move</button>
      </div>
    </div>
  );
};

export default Modal;
