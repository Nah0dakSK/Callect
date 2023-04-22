import React from "react";
import Sidebar from "../../sidebar/sideBar";
import { Link } from "react-router-dom";
import Bck from "../../../../images/back-arrow.png";
import "./blpopis.css";

function Blpopis() {
    return(
        <>
            <div className="bd">
                <Sidebar/>
                <div className="cont">
                <div className="popis">
                    <h1>POPIS</h1>
                    <p className="text_1"><strong>BLACKJACK</strong> je hra v ktorej dealer rozdá najskôr 2 karty, ktoré si môže hráč nechať alebo si ťahá ďalšiu.</p>
                    <p className="text_1">Vyhráva ten, kto sa priblíži ku 21 alebo dostane presne 21 inak prehráva alebo nastáva remíza.</p>
                </div>
            </div>
            <div className="spec2"></div>
            </div>
        </>
    )
}
export default Blpopis;