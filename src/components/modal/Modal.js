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
  cardClicked,
  moveCard
}) => {
  const { columnsData, columnOrder } = data;

  const [val, setVal] = useState({
    col1: column.title,
    pos1: openCard ? column.taskIds.indexOf(openCard) + 1 : 0,
    col: column.title,
    pos: openCard ? column.taskIds.indexOf(openCard) + 1 : 0
  });

  useEffect(() => {
    setVal({ ...val, pos: column.taskIds.indexOf(openCard) + 1 });
  }, [openCard]);

  const handleVal = (event, field, option) => {
    let value = field;
    value[option] = event.target.value;
    setVal({ ...val, ...value });
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
    return (
      <option value={index + 1} key={cardPosition}>
        {index + 1}
      </option>
    );
  });

  const handleCardMove = (
    card,
    column,
    previousposition,
    previousColumn,
    val
  ) => {
    moveCard(card, column, previousposition, previousColumn, val);
  };
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
              onChange={event => handleVal(event, val, "col")}
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
              id="position-select"
              onChange={event => handleVal(event, val, "pos")}
              required
            >
              {displayPosition}
            </select>
          </div>
        </div>

        <button
          onClick={() => handleCardMove(task, column, val.pos1, val.col1, val)}
          type="submit"
        >
          Move
        </button>
      </div>
    </div>
  );
};

export default Modal;
