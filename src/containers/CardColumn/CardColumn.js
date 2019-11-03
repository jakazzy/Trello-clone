import React, { useState } from "react";
import Card from "../../components/card/Card";
import "./CardColumn.css";

function CardColumn({ title, column }) {
  const [cards] = useState(column);
  return (
    <div className="column">
      <div className="list-header">
        <h2 className="list-header-text">{title}</h2>
        <div className="list-header-icon">...</div>
      </div>
      <div className="column-row-cards">
        <ul className="row-cards">
          {cards.map(card => (
            <Card card={card.card} key={card.id} />
          ))}
        </ul>
      </div>
      <div className="card-bottom">
        <span className="card-bottom-icon">+</span>
        <span className="card-bottom-text">Add another card</span>
      </div>
    </div>
  );
}

export default CardColumn;
