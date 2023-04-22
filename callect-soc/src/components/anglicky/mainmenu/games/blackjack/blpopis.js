import React from "react";
import Sidebar from "../../sidebar/sideBar";
import { Link } from "react-router-dom";
import Bck from "../../../../../images/back-arrow.png";
import "./blpopis.css";

function Blpopis() {
    return(
        <>
            <div className="bd">
                <Sidebar/>
                <div className="cont">
                <div className="popis">
                    <h1>ABOUT</h1>
                    <p className="text_1"><strong>BLACKJACK</strong> is a game where dealer deals first 2 cards, then is on player if he keeps them or takes another card.</p>
                    <p className="text_1">Whoever gets close to 21 or exactly 21 wins otherwise lose or make a draw.</p>
                </div>
            </div>
            <div className="spec2"></div>
            </div>
        </>
    )
}
export default Blpopis;