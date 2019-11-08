import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Card({ task, index }) {
  const handleBlur = value => {
    value.focus = false;
  };
  const value = task.content ? (
    <li className="card">
      <span className="card-info">{task.content}</span>
    </li>
  ) : (
    <div className="new-card">
      <li className="card">
        onBlur={() => handleBlur(task)}
        <span className="card-info">
          <textarea
            rows="1"
            cols="23"
            autoFocus
            placeholder="Enter a title for this card..."
          ></textarea>
        </span>
      </li>
      <button type="submit">Add Card</button>
    </div>
  );

  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {value}
        </div>
      )}
    </Draggable>
  );
}

export default Card;
