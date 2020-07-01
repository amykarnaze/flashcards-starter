class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctPercentage = 0;
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.deck.cards.shift();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let percentage = ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
    return this.correctPercentage = Math.round(percentage);
  }
}

module.exports = Round;
