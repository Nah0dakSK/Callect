import React from "react";
import "./sideBar.css";
import Logo from "../../../../images/logo_callect.png";
import Home from "../../../../images/home.png";
import SK from "../../../../images/slovak-flag.png";
import Profile from "../../../../images/profile.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Sidebar() {
    const { logout } = useAuth0();
    return(
        <>
            <div className="header">
                <Link to="/eng"><img src={Home} className="home" alt="home" id="HOme"></img></Link>
                <Link to="/"><img src={SK} alt="sk" id="eng"></img></Link>
                <img src={Logo} className="logo" alt="logo" id="logo"></img>
                <Popup trigger=
                {<img src={Profile} alt="profile" id="Profile"></img>}>
                <p className="par">Logged In</p>
                <button className="logout" onClick={() => logout()}>Logout</button>
                </Popup>
            <input type="checkbox" className="sidebarmenu" id="sidebarmenu"/>
            <label htmlFor="sidebarmenu" className="sidebaricontoggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarmenu">
                <ul className="sidebarmenuInner">
                    <li>Menu <span>Project</span></li>
                    <li><a href="/popis">About</a></li>
                    <li><a href="/kontakt">Contact</a></li>
                    <li><a href="/hry">Games</a></li>
                </ul>
            </div>
        </div>
            <div id="center" className="main center">
                <div className="mainInner">

                </div>
            </div>
        </>
    );
}

/*<Link to="/auth"><button className="button-1">Authentifikácia</button></Link> */
export default Sidebar;