const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  let deck1, deck2, card1, card2, card3;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck1 = new Deck([card1, card2, card3]);
    deck2 = new Deck([card1, card2]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck1).to.be.an.instanceof(Deck);
  });

  it('should have a property of cards', function() {
    expect(deck1.cards).to.deep.equal([card1, card2, card3]);
  });

  describe('countCards', function() {
    it('should return number of cards in the deck', function() {
      expect(deck1.countCards()).to.equal(3);
      expect(deck2.countCards()).to.equal(2);
    });
  });
});

});
