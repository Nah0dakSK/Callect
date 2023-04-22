import React from 'react';
import CardView from './CardView.jsx';
import '../styles/Hand.css';
import placeholder from '../../../../../../images/assets/background.png';


export default function Hand ({ dealer, cards}) {
  const handContent =
    cards.length === 0 ?
      <div className='hand1'>
        <div>
          <img src={placeholder} alt="" id='Crd'/>
        </div>
      </div>
    :
      cards.map((card, i) =>
        <div className='hand1' key={i}>
          <CardView card={card}></CardView>
        </div>)

  if (dealer && cards.length === 2) {
    handContent[0].props.children.props.card.flip = false;
  }

  return (
    <div className='hand1-container'>
      {handContent}
    </div>
  )
}