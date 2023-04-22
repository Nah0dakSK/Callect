import React from 'react';
import '../styles/ButtonPanel.css';

export default function ButtonPanel({  gc  }) {
  return (
    <div>
    {
      {
        'Start':
          <button type="button" onClick={() => {gc.deal()}}  className="deal1">
            <strong>DEAL</strong>
          </button>,
        'Dealt':
          <>
            <button type="button" onClick={() => {gc.hit()}} className="hit1">
              <strong>ADD</strong>
            </button>
            <button type="button" onClick={() => {gc.stay()}} className="stay1">
              <strong>STAY</strong>
            </button>
          </>,
        'Dealing':
          <div className="message1"><strong>DEALING</strong></div>,
        'Stay':
          <div className="message1"><strong>DEALING</strong></div>,
        'Blackjack':
          <div className="message1"><strong>BLACKJACK</strong></div>,
        'Win':
          <div className="message1"><strong>YOU WIN</strong></div>,
        'Lose':
          <div className="message1"><strong>YOU LOSE</strong></div>,
        'Tie':
          <div className="message1"><strong>DRAW</strong></div>,
        'Bust':
          <div className="message1"><strong>OVER</strong></div>
      }[gc.gameState]
    }
    </div>
  )
}

