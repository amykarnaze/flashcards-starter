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
