const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/game');
// const data = require('./data');
// const prototypeQuestions = data.prototypeData;
// const util = require('./util');

describe('game', function() {
  let game;
  beforeEach(function() {
    // card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    // card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    // card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    // deck = new Deck();
    // round = new Round(deck);
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have property of currentRound with default of {}', function() {
    expect(game.currentRound).to.deep.equal({});
  });

  describe('start', function() {
    it('should start a game', function() {
      // expect(game.start()).to.equal();
    });
    it('should create Cards and instantiate a new round', function() {
      game.start();
      expect(game.currentRound.deck.cards.length).to.equal(30);
      expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
      expect(game.currentRound).to.be.an.instanceof(Round);

    });

    // it('should be an instance of Round', function() {
    //   game.start();
    //   expect(game.currentRound).to.be.an.instanceof(Round);
    // });
    });

});
