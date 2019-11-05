import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Card({ task, index }) {
  console.log(task.id, "thisis task id");
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <li className="card">
            <span className="card-info">{task.content}</span>
          </li>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
