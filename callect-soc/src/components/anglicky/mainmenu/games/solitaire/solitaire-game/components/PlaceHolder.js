import React from 'react';
import '../../../../../../mainmenu/games/solitaire/solitaire-game/styles/Game.css';

const Card = (props) => {

  const src = props.src;

  return (
    <div
      className='place-holder-container'
    >
      <img
        alt='card'
        draggable='false'
        className='place-holder'
        src={src}
      />
    </div>
  );
};

export default Card;