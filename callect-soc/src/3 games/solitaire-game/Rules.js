import React from 'react';
import './styles/Game.css';
import { Link } from "react-router-dom";
import { ReactComponent as BackArrow } from './assets/icons/backArrow.svg';

function Rules() {
  return (
    <div style={{ margin: '30px' }}>
      <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '12px' }}>
        <div style={{ fontSize: '18px' }}>
          <h2 style={{ textAlign: 'center ' }}>Ako hrať Group Six Solitaire</h2>
          <strong>SPUSTENIE HRY:</strong> <br />
          Hra/časovač začína po umiestnení prvého platného ťahu.
          <br /><br />
          <strong>CIEĽ:</strong><br />
          Cieľom hry je naplniť všetky štyri základy balíčkom kariet, pričom každý základ obsahuje iba jednu farbu usporiadanú vzostupne od esa po kráľa.
          <br /><br />
          <strong>TABLEAU:</strong><br />
          Hra sa skladá zo siedmich talbeau stĺpcov. Karty lícom nahor v každom stĺpci sa dajú presúvať a možno ich použiť na akýkoľvek platný ťah. Karty sú na tabuli naskladané v zostupnom poradí striedaním farieb. Do prázdneho tabla môžu byť umiestnené iba králi alebo kôpky začínajúce na kráľ.
          <br /><br />
          <strong>NÁJDENIE:</strong><br />
          Každý zo štyroch základov musí byť vyplnený vo vzostupnom poradí počnúc esom a končiac kráľom. Na rozdiel od tabuľových stĺpov musí každý základový stĺpec obsahovať iba jeden typ karty.
          <br /><br />
          <strong>HLADKA ZÁSOB A TALONU:</strong><br />
          Zásobné karty je možné hrať len po jednej, keďže sú vyložené hore v hornej časti balíčka. Hráč môže umiestniť vrchnú kartu do kôpky talónov, ak sa s kartou nedá hrať, alebo môže byť karta zahraná v tablo alebo základ. Keď je kôpka zásob prázdna, hráč ju môže doplniť kartami kôpky pazúrov kliknutím na „restock“
          <br /><br />
          <div id="positive-pts">
            <strong>POZITÍVNE BODY:</strong><br />
            +5 bodov – keď sa karta presunie zo skladu na tablo<br />
            +5 bodov – keď sa karta lícom nadol v stĺpci s obrazom otočí lícom nahor<br />
            +10 bodov – za každú kartu umiestnenú v základni<br />
            + Bonusové body – udeľované pri výhre v hre – 700 000/s na výhru<br />
          </div>
          <div id="negative-pts">
            <strong>NEGATÍVNE BODY:</strong><br />
            -2 body plus body získané z predchádzajúceho ťahu – pri stlačení „back a move“ <br />
            -2 body – za každých 10 sekúnd hry<br />
            -100 bodov – pri každom vynulovaní zásob (systém žrebovania 1)<br />
          </div>
          <br /><br />
          <strong>PRAVIDLÁ VEGAS:</strong><br />
          Pravidlá Vegas sú rovnaké ako štandardné, až na to, že zásoby je možné prehrať iba raz. Akonáhle sú zásoby prázdne, hra končí. Cieľom je získať čo najvyššie skóre skôr, ako bude zásoba prázdna.
          <br />
          <br />
          <br />
          <br />
          <div id="back-link">
            <div>
              <Link to={'/solitaire'}>
                <div style={{
                  cursor: 'pointer', padding: '8px 16px', borderRadius: '6px', borderStyle: 'solid', borderWidth: '2px', color: '#000', borderColor: '#000', backgroundColor: '#d4d4d8', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px'
                }}
                >
                  <BackArrow width={20} height={20} />
                  <div style={{ marginLeft: '6px' }} />
                  <span>BACK</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div >
  );
}

export default Rules;