import React from 'react';
import '../styles/ButtonPanel.css';

export default function ButtonPanel({  gc  }) {
  return (
    <div>
    {
      {
        'Start':
          <button type="button" onClick={() => {gc.deal()}}  className="deal1">
            <strong>ROZDAŤ</strong>
          </button>,
        'Dealt':
          <>
            <button type="button" onClick={() => {gc.hit()}} className="hit1">
              <strong>PRIDAŤ</strong>
            </button>
            <button type="button" onClick={() => {gc.stay()}} className="stay1">
              <strong>OSTAŤ</strong>
            </button>
          </>,
        'Dealing':
          <div className="message1"><strong>ROZDÁVANIE</strong></div>,
        'Stay':
          <div className="message1"><strong>ROZDÁVANIE</strong></div>,
        'Blackjack':
          <div className="message1"><strong>BLACKJACK</strong></div>,
        'Win':
          <div className="message1"><strong>VYHRAL SI</strong></div>,
        'Lose':
          <div className="message1"><strong>PREHRAL SI</strong></div>,
        'Tie':
          <div className="message1"><strong>REMÍZA</strong></div>,
        'Bust':
          <div className="message1"><strong>PREVÝŠENIE</strong></div>
      }[gc.gameState]
    }
    </div>
  )
}

