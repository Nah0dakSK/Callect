import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { suits, faces } from '../service/cardValues.js'
const images = {}
suits.forEach(suit => {
  faces.forEach(face => {
    images[`./${face}_${suit}.png`] = require(`../../solitaire/assets/cards/${face}-${suit}.png`);
  })
})
const cardBack = require('../../solitaire/assets/background.png');

export default function CardView({ card:{face, suit, flip} }) {

  return (
    <Flippy isFlipped={flip} >
      <FrontSide>
        <img src={images[`./${face}_${suit}.png`]} alt="" />
      </FrontSide>
      <BackSide>
        <img src={cardBack} alt="" />
      </BackSide>
    </Flippy>
  )
}
