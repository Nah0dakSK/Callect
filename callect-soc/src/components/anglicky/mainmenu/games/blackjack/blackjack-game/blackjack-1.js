import React from "react";
import ButtonPanel from "./comp/ButtonPanel.jsx";
import Hand from "./comp/Hand.jsx";
import GameController from "./service/GameControl.js";
import "./blackjack-1.css";
import { Link } from "react-router-dom";
import Sidebar from "../../../sidebar/sideBar.js";

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
          <header className="App-header1">
          <Sidebar/>
              <Hand dealer={true} cards={this.state.dealerCards}
              />
              <ButtonPanel gc={this.gc} />
              <Hand dealer={false} cards={this.state.playerCards}
              />
              <div className="back1">
                <Link to="/blackjackmenu"><button className="back1-btn">SPÄŤ</button></Link>
              </div>
              <div className="spej"></div>
          </header>
      </> 
      );
    }
  }