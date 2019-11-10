import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { getCard } from "../../lib/utils";

function Card({ task, index, removeCard, column, editCard }) {
  const [values, setValues] = useState({
    content: ""
  });

  const handleBlur = value => {
    removeCard(value, column.id);
    return value;
  };

  const handleSubmit = e => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      editCard(values, column.id);
      setValues({ content: "" });
    }
  };

  const handleChange = (event, card) => {
    event.persist();
    setValues({ ...values, ...card, content: event.target.value });
  };

  // useEffect(() => {
  //   addCard(values);
  // });
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
