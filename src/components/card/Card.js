import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Card({ task, index }) {
  const value = task.content ? (
    <li className="card">
      <span className="card-info">{task.content}</span>
    </li>
  ) : (
    <div>
      <li className="card">
        <span className="card-info">
          <textarea
            rows="1"
            cols="23"
            autoFocus
            placeholder="Enter a title for this card..."
          ></textarea>
        </span>
      </li>
      <button>Add Card</button>
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
