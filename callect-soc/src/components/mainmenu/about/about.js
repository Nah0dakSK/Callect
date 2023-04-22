import React from "react";
import Sidebar from "../sidebar/sideBar";
import Bck from "../../../images/back-arrow.png";
import "./about.css";
import { Link } from "react-router-dom";

function About() {
    return(
        <>
            <Sidebar/>
            <div className="cont">
                <div className="popis">
                    <h1>POPIS</h1>
                    <p className="text_1"><strong>CALLECT</strong> je herný web, ktorý obsahuje určitý počet kartových hier.</p>
                    <p className="text_1">Po úspešnom prihlásení môžu uživatelia využívať web stránku.</p>
                </div>
                <Link to="/"><img src={Bck} alt="bck" id="bck"></img></Link>
            </div>
        </>
    )
}
export default About;