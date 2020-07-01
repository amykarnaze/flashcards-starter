const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {}
  this.currentRound = {};

  start() {
    const cards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    });
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(this.currentRound.deck);
    this.printQuestion(this.currentRound);
  }


  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
