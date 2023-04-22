import React from "react";
import "./contact.css";
import Sidebar from "../sidebar/sideBar";
import Bck from "../../../images/back-arrow.png";
import { Link } from "react-router-dom";

function Contact() {
    return(
        <>
            <Sidebar/>
            <div className="cont-1">
                <div className="kontakt">
                    <h1>KONTAKT</h1>
                    <p className="text-2">Spracovanie: Patrik Fatura</p>
                    <p className="text-2">Mobil: 0903874216</p>
                    <p className="text-2">Email: faturapatrik6@gmail.com</p>
                </div>
                <Link to="/"><img src={Bck} alt="bck" id="bck"></img></Link>
            </div>
        </>
    )
}
export default Contact;