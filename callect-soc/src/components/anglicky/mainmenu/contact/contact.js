import React from "react";
import "./contact.css";
import Sidebar from "../sidebar/sideBar";
import Bck from "../../../../images/back-arrow.png";
import { Link } from "react-router-dom";

function Contact() {
    return(
        <>
            <Sidebar/>
            <div className="cont-1">
                <div className="kontakt">
                    <h1>KONTAKT</h1>
                    <p className="text-2">Made by: Patrik Fatura</p>
                    <p className="text-2">Mobile: 0903874216</p>
                    <p className="text-2">Email: faturapatrik6@gmail.com</p>
                    <p className="text-2">GitHub: https://github.com/Nah0dakSK/Callect_SOC</p>
                </div>
            </div>
        </>
    )
}
export default Contact;