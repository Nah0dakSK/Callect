import React from "react";
import "./homepage.css";
import Sidebar from "../sidebar/sideBar";
import { Link } from "react-router-dom";

function Homepage() {
    return(
        <>
            <Sidebar />
            <div className="main">
                <h1>CALLECT <li className="btm">game web</li></h1>
            </div>
            <br/>
            <br/>
            <Link to="/games"><button className="btn">Choose game</button></Link>
            <li></li>
            <li></li>
            <li></li>
            <div className="box-1">
                <h2 className="popisok">ABOUT</h2>
                <p className="text-1"><strong>CALLECT</strong> is a web, which contains 3 card games.</p>
                <p className="text2"><a href="/about">more →</a></p>
            </div>
            <div className="box-2">
                <h2 className="kontakty">CONTACT</h2>
                <p className="text-1">made by: Patrik Fatura</p>
                <p className="text-1">mobile: 0903874216</p>
                <p className="text-1">mail: faturapatrik6@gmail.com</p>
                <p className="text2"><a href="/contact">more →</a></p>
            </div>
        </>
    )
}

export default Homepage;