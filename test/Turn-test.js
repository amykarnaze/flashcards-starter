const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let happyTurn, sadTurn, card;

  beforeEach(function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    // clean up it blocks and takes out repetative const cards/code
    happyTurn = new Turn('object', card);
    sadTurn = new Turn('sea otter', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(happyTurn).to.be.an.instanceof(Turn);
  });

  it('should have a property of guess', function() {
      expect(happyTurn.guess).to.equal('object');
    });

    it('should have a property of card that is an instance of card', function() {
      expect(happyTurn.card).to.equal(card);
      expect(card).to.be.an.instanceof(Card);
    });

    describe('returnGuess', function() {
      it('should return a guess', function() {
      expect(happyTurn.returnGuess()).to.equal('object');
      });
    });

    describe('returnCard', function() {
    it('should return a card', function() {
      expect(happyTurn.returnCard()).to.equal(card);
    });
  });

  describe('evaluateGuess', function() {
    it('should return true if the guess is correct', function() {
      expect(happyTurn.evaluateGuess()).to.equal(true);
    });

    it('should return false if the guess is wrong', function() {
      expect(sadTurn.evaluateGuess()).to.equal(false);
    });
  });

  describe('giveFeedback', function() {
    it('should return correct! if guess is correct', function() {
      expect(happyTurn.giveFeedback()).to.equal('correct!');
    });

    it('should return incorrect! if guess is incorrect', function() {
      expect(sadTurn.giveFeedback()).to.equal('incorrect!');
    });
  });

});
