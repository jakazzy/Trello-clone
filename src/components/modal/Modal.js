import React, { useState, useEffect } from "react";

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
  column,
  openCard,
  cardClicked
}) => {
  const { columnsData, columnOrder } = data;
  console.log(
    column.taskIds.lastIndexOf(task.id) + 1,
    "hello",
    "openCard :",
    openCard
  );
  const [val, setVal] = useState({
    col: column.title,
    pos: openCard ? column.taskIds.indexOf(openCard) + 1 : 0
  });

  useEffect(() => {
    setVal({ ...val, pos: column.taskIds.indexOf(openCard) + 1 });
    // return () => {
    //   cleanup;
    // };
  }, [openCard]);

  const handleVal = () => {
    // setVal("to do");
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
  });

  const displayPosition = column.taskIds.map((cardPosition, index) => {
    if (cardPosition === cardClicked) {
      return (
        <option value={cardPosition} key={cardPosition}>
          {index + 1}
        </option>
      );
    }
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
