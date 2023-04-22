import React from "react";
import Sidebar from "../../sidebar/sideBar";
import { Link } from "react-router-dom";
import Bck from "../../../../../images/back-arrow.png";

function Solpopis() {
    return(
        <>
            <div className="bd">
                <Sidebar/>
                <div className="cont2">
                <div className="popis">
                    <h1>ABOUT</h1>
                    <p className="text_1"><strong>SOLITAIRE</strong> where the cards of a shuffled pack are dealt into a prescribed layout on a table top. Cards are then moved and placed so as to eventually arrange them in ascending (e.g. Ace to King) or descending sequence.</p>
                    <p className="text_1">The card starting the required sequence is known as the foundation card or base card and the sequence or family is said to be built upon this card.</p>
                    <p className="text_1">If the player is able to throw out all the cards in this way, the game is out i.e. won. Totalling means to discard any two cards whose combined value forms a particular total, say eleven or thirteen; the game is out if the player can get rid of all the cards this way.</p>
                </div>
            </div>
            <div className="spc2"></div>
            </div>
        </>
    )
}
export default Solpopis;