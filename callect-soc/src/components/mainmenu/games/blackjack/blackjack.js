import React from "react";
import Sidebar from "../../sidebar/sideBar";
import Blackjack from "../../../../images/blackjack-small.png";
import "./blackjack.css";
import { Link } from "react-router-dom";

function BlackJack() {
    return (
        <>
            <div className="backgnd">
                <Sidebar/>
                <img src={Blackjack} alt="" id="Blkjk"></img>
                <div className="blkjk-txt">
                    <h1>BLACKJACK</h1>
                </div>
                    <br/>
                    <Link to="/blackjack"><button className="butn">ŠTART</button></Link>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Link to="/blpopis"><button className="butn">POPIS</button></Link>
                <div className="spec"></div>
            </div>
        </>
    )
}
export default BlackJack;