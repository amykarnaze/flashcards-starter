const Turn = require('./Turn');

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
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.deck.cards.shift();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let percentage = ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
    return this.correctPercentage = Math.round(percentage);
  }

  endRound() {
    if (this.deck.cards.length === 0) {
      this.calculatePercentCorrect();
      console.log(`** Round over! ** You answered ${this.correctPercentage} of the questions correctly!`);
      return `** Round over! ** You answered ${this.correctPercentage} of the questions correctly!`;
      // return process.exit();
    }
  }
}

module.exports = Round;
