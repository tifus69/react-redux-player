import React from 'react';
import './Card.css';
import { MdPlayCircleOutline } from 'react-icons/md';

const Card = props => {
  const { card, sourceChange } = props;
  return (
    <div
      className="imageWrapper"
      onClick={() => sourceChange({ url: card.source, reload: true })}
    >
      <div className="icon">
        <MdPlayCircleOutline style={{ color: 'white', height: 50, width: 50 }} />
      </div>
      <img
        className="image"
        src={card.thumb}
        alt="exemple"
        height="100"
        width="150"
        style={{ padding: 10 }}
      />
    </div>
  );
};

export default Card;