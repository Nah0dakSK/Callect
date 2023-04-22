import React from "react";
import Sidebar from "../../sidebar/sideBar";
import { Link } from "react-router-dom";
import Bck from "../../../../images/back-arrow.png";

function Pokpopis() {
    return(
        <>
            <div className="bd">
                <Sidebar/>
                <div className="cont1">
                <div className="popis">
                    <h1>POPIS</h1>
                    <p className="text_1"><strong>POKER</strong> je rodina porovnávacích kartových hier, v ktorých hráči stavia na to, ktorý list je najlepší podľa pravidiel konkrétnej hry.</p>
                    <p className="text_1">V štandardnom pokri každý hráč vsádza podľa poradia, o ktorom si myslí, že jeho ruka má hodnotu v porovnaní s ostatnými hráčmi. Akcia potom pokračuje v smere hodinových ručičiek, pretože každý hráč musí buď uhádnuť (alebo "zavolať") maximálnu predchádzajúcu stávku, alebo zložiť stávku, pričom doteraz prehral stávku a všetky ďalšie zapojenia do listu. </p>
                    <p className="text_1">Stávkové kolo končí, keď všetci hráči buď zavolajú poslednú stávku, alebo zložia. Ak sa všetci hráči okrem jedného zložia v ktoromkoľvek kole, zostávajúci hráč zbiera bank bez toho, aby musel odhaliť svoju ruku. Ak po poslednom stávkovom kole zostane v spore viac ako jeden hráč, uskutoční sa zúčtovanie, kde sú odhalené ruky a hráč s víťaznou rukou vezme bank.</p>
                </div>
            </div>
            <div className="spc2"></div>
            </div>
        </>
    )
}
export default Pokpopis;