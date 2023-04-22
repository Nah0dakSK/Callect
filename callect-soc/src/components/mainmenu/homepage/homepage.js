import React from "react";
import "./homepage.css";
import Sidebar from "../sidebar/sideBar";
import { Link } from "react-router-dom";

function Homepage() {
    return(
        <>
            <Sidebar />
            <div className="main">
                <h1>CALLECT <li className="btm">herný web</li></h1>
            </div>
            <br/>
            <br/>
            <Link to="/hry"><button className="btn">Výber hry</button></Link>
            <li></li>
            <li></li>
            <li></li>
            <div className="box-1">
                <h2 className="popisok">POPIS</h2>
                <p className="text-1"><strong>CALLECT</strong> je web, ktorý obsahuje určitý počet kartových hier.</p>
                <p className="text2"><a href="/popis">viac →</a></p>
            </div>
            <div className="box-2">
                <h2 className="kontakty">KONTAKT</h2>
                <p className="text-1">spracovanie: Patrik Fatura</p>
                <p className="text-1">mobil: 0903874216</p>
                <p className="text-1">mail: faturapatrik6@gmail.com</p>
                <p className="text2"><a href="/kontakt">viac →</a></p>
            </div>
        </>
    )
}

export default Homepage;