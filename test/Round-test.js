const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  let round, deck, card1, card2, card3;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    // deck2 = new Deck([card1, card2]);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  describe('returnCurrentCard', function() {
    it('should return a current card being played', function() {
      expect(round.returnCurrentCard()).to.equal(card1);
    });
  });

  it('should have property of turns with default of 0', function() {
    expect(round.turns).to.equal(0);
  });

  it('should have property that stores incorrect guesses, that defaults to empty array', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  describe('takeTurn', function() {
    it('should increment the turns property', function() {
      round.takeTurn();
      expect(round.turns).to.equal(1);
      round.takeTurn();
      expect(round.turns).to.equal(2);
    });

  });
