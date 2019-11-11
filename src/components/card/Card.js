import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { getCard } from "../../lib/utils";

function Card({ task, index, removeCard, column, editCard }) {
  const [values, setValues] = useState({
    content: ""
  });

  const handleBlur = (event, value) => {
    event.preventDefault();
    removeCard(value, column.id);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (event.keyCode === 13 && event.shiftKey === false) {
      editCard(values, column.id);
      setValues({ content: "" });
    }
  };

  const handleChange = (event, card) => {
    event.persist();
    setValues({ ...values, ...card, content: event.target.value });
  };

  const value = getCard(task, handleBlur, handleChange, values, handleSubmit);

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
