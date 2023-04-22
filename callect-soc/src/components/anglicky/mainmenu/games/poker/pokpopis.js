import React from "react";
import Sidebar from "../../sidebar/sideBar";
import { Link } from "react-router-dom";
import Bck from "../../../../../images/back-arrow.png";

function Pokpopis() {
    return(
        <>
            <div className="bd">
                <Sidebar/>
                <div className="cont1">
                <div className="popis">
                    <h1>ABOUT</h1>
                    <p className="text_1"><strong>POKER</strong> is a family of comparing card games in which players wager over which hand is best according to that specific game's rules.</p>
                    <p className="text_1">In standard poker, each player bets according to the rank they believe their hand is worth as compared to the other players. The action then proceeds clockwise as each player in turn must either match (or "call") the maximum previous bet, or fold, losing the amount bet so far and all further involvement in the hand.</p>
                    <p className="text_1">The betting round ends when all players have either called the last bet or folded.If all but one player folds on any round, the remaining player collects the pot without being required to reveal their hand.</p>
                    <p className="text_1">If more than one player remains in contention after the final betting round, a showdown takes place where the hands are revealed, and the player with the winning hand takes the pot.</p>
                </div>
            </div>
            </div>
        </>
    )
}
export default Pokpopis;