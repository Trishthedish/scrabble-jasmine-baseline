// scrabble.spec.js
import Scrabble from "scrabble";


describe('Scrabble', function() {

  describe('score', function() {
    it('should score a given word', function() {
      var testScrabble = new Scrabble();
        expect(testScrabble.score('word')).toEqual(8);
    });
  });


});
