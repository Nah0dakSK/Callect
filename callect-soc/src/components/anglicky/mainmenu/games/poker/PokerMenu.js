import React from "react";
import Sidebar from "../../sidebar/sideBar";
import POker from "../../../../../images/poker-small.png";
import "./poker.css";
import { Link } from "react-router-dom";

function PokerMenu() {
    return (
        <>
            <div className="backgrnd">
                <Sidebar/>
                <img src={POker} alt="" id="Pkr"></img>
                <div className="blkjk-txt">
                    <h1>POKER</h1>
                </div>
                    <br/>
                    <Link to="/poker-eng"><button className="butn">START</button></Link>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Link to="/pokpopis-eng"><button className="butn">ABOUT</button></Link>
                <div className="spajs"></div>
            </div>
        </>
    )
}
export default PokerMenu;