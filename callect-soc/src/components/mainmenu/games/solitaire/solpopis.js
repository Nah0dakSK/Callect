import React from "react";
import Sidebar from "../../sidebar/sideBar";
import { Link } from "react-router-dom";
import Bck from "../../../../images/back-arrow.png";

function Solpopis() {
    return(
        <>
            <div className="bd">
                <Sidebar/>
                <div className="cont2">
                <div className="popis">
                    <h1>POPIS</h1>
                    <p className="text_1"><strong>SOLITAIRE</strong> Karty zamiešaného balíčka sú rozdané do predpísaného rozloženia na stolovej doske. Karty sa potom posúvajú a umiestňujú tak, aby boli nakoniec usporiadané vzostupne (napr. od Esa po Kráľa) alebo zostupne.</p>
                    <p className="text_1">Karta začínajúca požadovanú sekvenciu je známa ako základná karta alebo základná karta a sekvencia alebo rodina sa považuje za postavenú na tejto karte.</p>
                    <p className="text_1">Ak je hráč schopný týmto spôsobom vyhodiť všetky karty, hra je vonku, t.j. výhra. Nakopenie znamená vyradiť ľubovoľné dve karty, ktorých kombinovaná hodnota tvorí konkrétny súčet, povedzme jedenásť alebo trinásť; Hra je vonku, ak sa hráč môže zbaviť všetkých kariet týmto spôsobom.</p>
                </div>
            </div>
            </div>
        </>
    )
}
export default Solpopis;