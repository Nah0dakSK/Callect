import React from 'react';
import '../../../../../../mainmenu/games/solitaire/solitaire-game/styles/Game.css';

const Card = (props) => {

  const src = props.src;
  let isStockpile = props.isStockpile;
  if (isStockpile === null) isStockpile = false;

  return (
    <div
      className={[isStockpile ? 'stockpile-card-container' : 'card-container']}
    >
      <img
        id='Card'
        alt='card'
        draggable='false'
        className={isStockpile ? 'stockpile-card' : 'card'}
        src={src}
      />
    </div>
  );
};

export default Card;