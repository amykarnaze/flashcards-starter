/* eslint-disable max-len */
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

    it('should change current card', function() {
      round.takeTurn();
      expect(round.returnCurrentCard()).to.equal(card2);
      round.takeTurn();
      expect(round.returnCurrentCard()).to.equal(card3);
    });

    it('should give feedback', function() {
      const correctFeedback = round.takeTurn('sea otter');
      expect(correctFeedback).to.equal('correct!');
      const incorrectFeedback = round.takeTurn('spleen');
      expect(incorrectFeedback).to.equal('incorrect!');
    });

    it('should store the id number of incorrect guesses', function() {
      round.takeTurn('sea otter');
      expect(round.incorrectGuesses).to.deep.equal([]);
      round.takeTurn('spleen');
      expect(round.incorrectGuesses).to.deep.equal([14]);
    });
  });

  describe('calculatePercentCorrect', function() {
    it('should calculate the correct percentage', function() {
      round.takeTurn('sea otter');
      expect(round.calculatePercentCorrect()).to.equal(100);
      round.takeTurn('spleen');
      expect(round.calculatePercentCorrect()).to.equal(50);
    });
  });

  describe('endRound', function() {
    it('should print to the console', function() {
      round.takeTurn('sea otter');
      round.takeTurn('spleen');
      round.takeTurn('pug');
      round.endRound();
      expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.correctPercentage} of the questions correctly!`)
    });
  });
});
