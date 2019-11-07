import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Card({ task, index }) {
  const value = task.content || <textarea rows="1" cols="20"></textarea>;
  console.log(task);
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <li className="card">
            <span className="card-info">{value}</span>
          </li>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
