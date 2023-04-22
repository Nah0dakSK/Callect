import React from "react";
import ButtonPanel from "./comp/ButtonPanel.jsx";
import Hand from "./comp/Hand.jsx";
import GameController from "./service/GameControl.js";
import "./blackjack.css";
import { Link } from "react-router-dom";

export default class Blackjack extends React.Component {
    constructor() {
      super();
      this.gc = new GameController(this);
      this.state = {
        dealerCards: this.gc.dealerCards,
        playerCards: this.gc.playerCards
      }
      this.mounted = false;
    }
  
    componentDidMount() {
      this.mounted = true;
    }
  
    render() {
      return (
       <>
       <h1 className="text">CALLECT</h1>  
        <div className="App">
          <header className="App-header">
              <Hand dealer={true} cards={this.state.dealerCards}
              />
              <ButtonPanel gc={this.gc} />
              <Hand dealer={false} cards={this.state.playerCards}
              />
              <div className="back">
                <Link to="/"><button className="back-btn">SPÄŤ</button></Link>
              </div>
          </header>
        </div>
      </> 
      );
    }
  }