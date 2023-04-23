import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HPage from "./components/anglicky/mainmenu/homepage/homepage";
import AB from "./components/anglicky/mainmenu/about/about";
import Cntct from "./components/anglicky/mainmenu/contact/contact";
import Gms from "./components/anglicky/mainmenu/games/games";

import Pkr from "./components/anglicky/mainmenu/games/poker/PokerMenu";
import PKr from "./components/anglicky/mainmenu/games/poker/poker-game/pokerJH";
import POkpopis from "./components/anglicky/mainmenu/games/poker/pokpopis";

import Blkjk from "./components/anglicky/mainmenu/games/blackjack/blackjack";
import BLkjk from "./components/anglicky/mainmenu/games/blackjack/blackjack-game/blackjack-1"
import BLpopis from "./components/anglicky/mainmenu/games/blackjack/blpopis";

import SOlit from "./components/anglicky/mainmenu/games/solitaire/solitaire";
import SOLit from "./components/anglicky/mainmenu/games/solitaire/solitaire-game/solitaire";
import SOlpopis from "./components/anglicky/mainmenu/games/solitaire/solpopis";



import Homepage from "./components/mainmenu/homepage/homepage";
import About from "./components/mainmenu/about/about";
import Contact from "./components/mainmenu/contact/contact";
import Games from "./components/mainmenu/games/games";


import Poker from "./components/mainmenu/games/poker/PokerMenu";
import PG from "./components/mainmenu/games/poker/poker-game/pokerJH";
import Pokpopis from "./components/mainmenu/games/poker/pokpopis";

import Solitaire from "./components/mainmenu/games/solitaire/solitaire";
import Solit from "./components/mainmenu/games/solitaire/solitaire-game/solitaire";
import Solpopis from "./components/mainmenu/games/solitaire/solpopis";

import BlackJack from "./components/mainmenu/games/blackjack/blackjack";
import Blkgm from "./components/mainmenu/games/blackjack/blackjack-game/blackjack-1";
import Blpopis from "./components/mainmenu/games/blackjack/blpopis";
import Auth from "./auth/Auth";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/eng" element={<HPage/>}></Route>
          <Route path="/about" element={<AB/>}></Route>
          <Route path="/contact" element={<Cntct/>}></Route>
          <Route path="/games" element={<Gms/>}></Route>

          <Route path="/pokermenu-eng" element={<Pkr/>}></Route>
          <Route path="/poker-eng" element={<PKr/>}></Route>
          <Route path="/pokpopis-eng" element={<POkpopis/>}></Route>

          <Route path="/blackjackmenu-eng" element={<Blkjk/>}></Route>
          <Route path="/blackjack-eng" element={<BLkjk/>}></Route>
          <Route path="/blpopis-eng" element={<BLpopis/>}></Route>

          <Route path="/solitairemenu-eng" element={<SOlit/>}></Route>
          <Route path="/solitaire-eng" element={<SOLit/>}></Route>
          <Route path="/solpopis-eng" element={<SOlpopis/>}></Route>
          



          <Route path="/" element={<Auth/>}></Route>
          <Route path="/domov" element={<Homepage/>}></Route>
          <Route path="/popis" element={<About/>}></Route>
          <Route path="/kontakt" element={<Contact/>}></Route>
          <Route path="/hry" element={<Games/>}></Route>

          <Route path="/pokermenu" element={<Poker/>}></Route>
          <Route path="/poker" element={<PG/>}></Route>
          <Route path="/pokpopis" element={<Pokpopis/>}></Route>

          <Route path="/blackjackmenu" element={<BlackJack/>}></Route>
          <Route path="/blackjack" element={<Blkgm/>}></Route>
          <Route path="/blpopis" element={<Blpopis/>}></Route>

          <Route path="/solitairemenu" element={<Solitaire/>}></Route>
          <Route path="/solitaire" element={<Solit/>}></Route>
          <Route path="/solpopis" element={<Solpopis/>}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;