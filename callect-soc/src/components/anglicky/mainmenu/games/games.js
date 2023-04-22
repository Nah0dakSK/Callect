import React from "react";
import Sidebar from "../sidebar/sideBar";
import Poker from "../../../../images/poker.png";
import Blackjack from "../../../../images/blackjack.png";
import Solitaire from "../../../../images/solitaire-cover.jpg";
import "./games.css";
import { Link } from "react-router-dom";

function Games() {
    return(
        <>
            <div className="bd">
                <Sidebar/>
                <div className="majn">
                    <h1>CHOOSE GAME</h1>
                </div>
                <div className="imgpos">
                    <Link to="/pokermenu-eng"><img src={Poker} alt="" id="Poker"></img></Link>
                    <Link to="/blackjackmenu-eng"><img src={Blackjack} alt="" id="Blackjack"></img></Link>
                    <Link to="/solitairemenu-eng"><img src={Solitaire} alt="" id="SOlitaire"></img></Link>
                </div>
                <div className="spc"></div>
            </div>
        </>
    )
}
export default Games;