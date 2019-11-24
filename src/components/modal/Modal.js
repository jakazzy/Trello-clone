import React, { useState } from "react";

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
  isMove,
  data,
  column
}) => {
  const { columnsData, columnOrder } = data;
  console.log(column.taskIds.indexOf(task.id) + 1, "hello");
  const [val, setVal] = useState({
    col: column.title,
    pos: column.taskIds.indexOf(task.id) + 1
  });
  const handleVal = () => {
    setVal("to do");
  };
  const displayColumn = data.columnOrder.map(columnItem => {
    // const selected = columnsData[column].title === column.title;
    return (
      <option
        value={columnsData[columnItem].title}
        key={columnsData[columnItem].id}
      >
        {columnsData[columnItem].title}
      </option>
    );
    console.log(columnsData[column], "this is column");
  });

  const displayPosition = column.taskIds.map((cardPosition, index) => {
    return (
      <option value={cardPosition} key={cardPosition}>
        {index + 1}
      </option>
    );
  });
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
          <div className="actions-content" style={{ flexGrow: 1 }}>
            <label>Column</label>
            <select
              name="select-column"
              className="column-options"
              id="column-select"
              value={val.col}
              onChange={handleVal}
              required
            >
              {/* <option value="car">car</option>
              <option value="car">car</option>
              <option value="car">car</option>
              <option value="car">car</option> */}
              {displayColumn}
            </select>
          </div>
          <div className="actions-content" style={{ flexGrow: 1 }}>
            <label>Position</label>
            <select
              name="select-position"
              className="column-options"
              value={val.pos}
              onChange={handleVal}
              required
            >
              {/* <option value="car">car</option>
              <option value="car">car</option>
              <option value="car">car</option>
              <option value="car">car</option> */}
              {displayPosition}
            </select>
          </div>
        </div>

        <button type="submit">Move</button>
      </div>
    </div>
  );
};

export default Modal;
