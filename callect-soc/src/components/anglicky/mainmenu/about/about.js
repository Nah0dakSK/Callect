import React from "react";
import Sidebar from "../sidebar/sideBar";
import Bck from "../../../../images/back-arrow.png";
import "./about.css";
import { Link } from "react-router-dom";

function About() {
    return(
        <>
            <Sidebar/>
            <div className="cont">
                <div className="popis">
                    <h1>ABOUT</h1>
                    <p className="text_1"><strong>CALLECT</strong> is a game web, which contains 3 card games.</p>
                    <p className="text_1">User creates an account, where his progress will be saved in games.</p>
                </div>
            </div>
        </>
    )
}
export default About;