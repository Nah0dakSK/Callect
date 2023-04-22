import React from 'react';
import '../styles/ButtonPanel.css';

export default function ButtonPanel({  gc  }) {
  return (
    <div>
    {
      {
        'Start':
          <button type="button" onClick={() => {gc.deal()}}  className="deal">
            <strong>ROZDAŤ</strong>
          </button>,
        'Dealt':
          <>
            <button type="button" onClick={() => {gc.hit()}} className="hit">
              <strong>PRIDAŤ</strong>
            </button>
            <button type="button" onClick={() => {gc.stay()}} className="stay">
              <strong>OSTAŤ</strong>
            </button>
          </>,
        'Dealing':
          <div className="message"><strong>ROZDÁVANIE</strong></div>,
        'Stay':
          <div className="message"><strong>ROZDÁVANIE</strong></div>,
        'Blackjack':
          <div className="message"><strong>BLACKJACK</strong></div>,
        'Win':
          <div className="message"><strong>VYHRAL SI</strong></div>,
        'Lose':
          <div className="message"><strong>PREHRAL SI</strong></div>,
        'Tie':
          <div className="message"><strong>REMÍZA</strong></div>,
        'Bust':
          <div className="message"><strong>PREVÝŠENIE</strong></div>
      }[gc.gameState]
    }
    </div>
  )
}

