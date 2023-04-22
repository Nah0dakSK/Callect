import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import "./CardView.css";
import { suits, faces } from '../service/cardValues.js'
const images = {}
suits.forEach(suit => {
  faces.forEach(face => {
    images[`./${face}_${suit}.png`] = require(`../../../../../../../images/assets/cards/${face}-${suit}.png`);
  })
})
const cardBack = require('../../../../../../../images/assets/background.png');

export default function CardView({ card:{face, suit, flip} }) {

  return (
    <Flippy isFlipped={flip} >
      <FrontSide>
        <img src={images[`./${face}_${suit}.png`]} alt="" id='Crd'/>
      </FrontSide>
      <BackSide>
        <img src={cardBack} alt="" id='Crd'/>
      </BackSide>
    </Flippy>
  )
}
