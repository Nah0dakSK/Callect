import React from "react";
import Sidebar from "../../sidebar/sideBar";
import Sltr from "../../../../images/solitaire-small.jpg";
import "./solitaire.css";
import { Link } from "react-router-dom";

function Solitaire() {
    return (
        <>
            <div className="backgrond">
                <Sidebar/>
                <img src={Sltr} alt="" id="Sltr"></img>
                <div className="sltr-txt">
                    <h1>SOLITAIRE</h1>
                </div>
                    <br/>
                    <Link to="/solitaire"><button className="butn">ŠTART</button></Link>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Link to="/solpopis"><button className="butn">POPIS</button></Link>
                <div className="spac"></div>
            </div>
        </>
    )
}
export default Solitaire;