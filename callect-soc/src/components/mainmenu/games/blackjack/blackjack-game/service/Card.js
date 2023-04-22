export default class Card {
    constructor(suit, face) {
      this._suit = suit;
      this._face = face;
      this._flip = false;
    }
  
    get suit() {
        return this._suit;
    }
  
    get face() {
      return this._face;
    }
  
    get value() {
      return (this.face === 'K' ||
              this.face === 'Q' ||
              this.face === 'J') ? 10 : Number(this.face)
    }
  
    get flip(){
      return this._flip;
    }
  
    set flip(f) {
      this._flip = f;
    }
  }