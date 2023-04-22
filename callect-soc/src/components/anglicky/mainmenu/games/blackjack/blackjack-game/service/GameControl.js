import Dealer from "./Dealer.js";

const RESTART_WAIT= 3000;
const MESSSAGE_WAIT = 1000;

export default class GameController {
  constructor(app) {
    this.app = app;
    this._playerCards = [];
    this._dealerCards = [];
    this.dealer = new Dealer();
    this.setup();
  }

  deal() {
    this._gameState = 'Dealing';
    this.app.setState({});
    this.dealer.deal();
  }

  hit() {
    this.dealer.hit();
  }

  stay() {
    this.playerStays = true;
    this.gameState = 'Stay';
    if ( this.dealerShouldHit() ) {
      this.dealer.dealToDealer();
    } else {
      this.dealerStays = true;
      this.calculateGameState();
    }
  }

  get gameState() {
    return this._gameState;
  }

  set gameState(s) {
    this._gameState = s;
  }

  get playerCards() {
    return this._playerCards;
  }

  get dealerCards() {
    return this._dealerCards;
  }

  playerBust() {
    return this.playerScore > 21
  }

  dealerBust() {
    return this.dealerScore > 21
  }

  bust() {
    return (this.playerBust() || this.dealerBust());
  }

  playerBlackjack() {
    return (this._playerCards.length === 2
          && this.playerHasAce
          && this.playerScore === 11);
  }

  dealerBlackjack() {
    return (this._playerCards.length === 2
          && this.dealerHasAce
          && this.dealerScore === 11);
  }

  blackjack() {
    return (this.playerBlackjack() || this.dealerBlackjack())
  }

  firstCardsJustDealt() {
    return (this._playerCards.length === 2 &&
            this._dealerCards.length === 2);
  }

 dealerShouldHit() {
    // dealer dal na soft 17 (ace & 6), ostal na 18+
    return ( this.playerStays &&
          (this.dealerScore < 17 ||
          (this.dealerHasAce && this.dealerScore < 7)));
  }

  doFinalState(state) {
    this.gameState = state;
    this.app.setState({});
    this.restart();
  }
  calculateGameState() {
    // ak presne 4 karty boli rozdané
    if (this.firstCardsJustDealt()) {
      // Blackjack
      if ( this.blackjack()) {
        if (!this.playerBlackjack()) {
          setTimeout(() => {
            this.doFinalState('Lose');
           }, MESSSAGE_WAIT)
        }
        else if (!this.dealerBlackjack()) {
          setTimeout(() => {
            this.doFinalState('Win');
           }, MESSSAGE_WAIT)
        }
        else {
          setTimeout(() => {
            this.doFinalState('Tie');
           }, MESSSAGE_WAIT)
        }
      }
      // Prehra
      else if ( this.bust() ) {
        this.gameState = 'Bust';


        if(!this.playerBust()) {
          setTimeout(() => {
            this.doFinalState('Win');
           }, MESSSAGE_WAIT)
        }
        if(!this.dealerBust()) {
          setTimeout(() => {
            this.doFinalState('Lose');
           }, MESSSAGE_WAIT)
        }
      } else {
        this.gameState = 'Dealt';
      }
      // ak obaja ostali po 2 kartách
      if ( this.playerStays &&  this.dealerStays ) {
        this.scoreAfterBothStay();
      }
    }

    // po prvých štyroch rozdaných kartách
    else {
      // ak hráč a dealer ostali
      if ( this.playerStays &&  this.dealerStays ) {
        this.scoreAfterBothStay();
      }

      // ak prehra pred stay
      else if ( this.playerBust() ) {
        this.gameState = 'Bust';
        setTimeout(() => {
          this.doFinalState('Lose');
        }, MESSSAGE_WAIT)
      } else if ( this.dealerBust() ) {
        setTimeout(() => {
          this.doFinalState('Win');
        }, MESSSAGE_WAIT)
      }
    }
    this.app.setState({});
  }

  scoreAfterBothStay() {
    if ( this.dealerBust() ) {
      this.gameState = 'Bust';
      setTimeout(() => {
        this.doFinalState('Win');
      }, MESSSAGE_WAIT)
    } else {
      if ( this.playerScore <= 11 && this.playerHasAce ) {
        this.playerScore += 10;
      }
      if ( this.dealerScore <= 11 && this.dealerHasAce ) {
        this.dealerScore += 10;
      }
      if ( this.playerScore > this.dealerScore ) {
        this.doFinalState('Win');
      } else if ( this.playerScore < this.dealerScore ) {
        this.doFinalState('Lose');
      } else {
        this.doFinalState('Tie');
      }
    }
    this.restart();
  }

  setUpSubscription() {
    // deal$ observable
    this.dealer.deal$.subscribe(c => {
      // vždy keď je pridelený item z deal$
      // card, nie trigger
      if(Array.isArray(c)) {
        // Extract card from observable
        let card = c[1][1]

        // pridelená karta dealerovi
        if (c[1][0] === 'd') {
          this._dealerCards.push(card);
          if (card.value === 1) { this.dealerHasAce = true }
          this.dealerScore += card.value;

          if ( this.dealerShouldHit() ) {
            setTimeout(() => {
              this.dealer.dealToDealer();
            }, MESSSAGE_WAIT);
          } else if ( this.playerStays ) {
            this.dealerStays = true;
            this.calculateGameState();
          }

        // pridelená karta hráčovi
        } else if ( c[1][0] === 'p') {
          this._playerCards.push(card);
          if (card.value === 1) { this.playerHasAce = true }
          this.playerScore += card.value;
        }
        if (this.blackjack()){
          this.gameState = 'Blackjack';
        }
        if (this.bust()){
          this.gameState = 'Bust';
        }

        // Update stavu hry
        this.calculateGameState();
      }
    });
  }

  restart() {
    this.logLastGame();
    setTimeout(() => {
      this.dealer.freshDeck();
      // clear the arrays while keeping the reference
      this._playerCards.length = 0;
      this._dealerCards.length = 0;
      this.setup();
    }, RESTART_WAIT);
  }

  setup() {
    this.playerScore = 0;
    this.dealerScore = 0;
    this.playerHasAce = false;
    this.dealerHasAce = false;
    this.playerStays = false;
    this.dealerStays = false;
    this.gameState = 'Start'
    this.setUpSubscription();
    if (this.app.mounted) {
      this.app.setState({});
    }
  }

  logLastGame() {
    console.log('Game Over')
    console.log(`Dealer cards: `);
    this._dealerCards.forEach(c => {
      console.log(`    ${c.face} of ${c.suit}s`);
    })
    console.log(`Player cards: `);
    this._playerCards.forEach(c => {
      console.log(`    ${c.face} of ${c.suit}s`);
    })
    console.log(`Dealer total: ${this.dealerScore}`);
    console.log(`Player total: ${this.playerScore}`);
    console.log(`Final state: ${this.gameState}`);
    console.log();
  }
}