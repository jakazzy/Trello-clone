import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./CardColumn.css";
import { Droppable } from "react-beautiful-dnd";

function CardColumn({ title, column, id }) {
  const [cards] = useState(column);
  return (
    <div className="column">
      <div className="list-header">
        <h2 className="list-header-text">{title}</h2>
        <div className="list-header-icon">...</div>
      </div>
      <Droppable droppableId={id.toString()}>
        {provided => (
          <div
            className="column-row-cards"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <ul className="row-cards">
              {cards.map((card, index) => (
                <Card
                  card={card.card}
                  key={card.id}
                  id={card.id}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </ul>
          </div>
        )}
      </Droppable>

      <div className="card-bottom">
        <span className="card-bottom-icon">+</span>
        <span className="card-bottom-text">Add another card</span>
      </div>
    </div>
  );
}

export default CardColumn;
