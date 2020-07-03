const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/game');

describe('game', function() {
  let game;
  beforeEach(function() {
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
    });

    it('should create Cards and instantiate a new round', function() {
      game.start();
      expect(game.currentRound.deck.cards.length).to.equal(30);
      expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
      expect(game.currentRound).to.be.an.instanceof(Round);
    });
  });
});
