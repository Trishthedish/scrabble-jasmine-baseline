// scrabble.spec.js
import Scrabble from "scrabble";

// the global Jasmine function describe
// 2 params: string, function. string = name or title for spec suite. usually what is being tested.
describe('Scrabble', function() {

  describe('score', function() {
    //Specs are defined by calling the global Jasmine function it
    it('1. should score a given word', function() {
      // An expectation in Jasmine is an assertion that is either true or false.
      var testScrabble = new Scrabble();
        expect(testScrabble.score('word')).toEqual(8);
    });

    it('If word entered is not a string, should throw error', function() {
      // An expectation in Jasmine is an assertion that is either true or false.
      var testScrabble = new Scrabble();
      expect(
        function(){testScrabble.score(10);}
      ).toThrow(TypeError());
    });

  });
    // part of above code blocks.

    // -----------highestScoreFrom -------------------//

  describe('highestScoreFrom', function() {

    it('Should return highestScoreFrom', function() {
      // sizzles = 25, fuzz = 25, dog = 5, cat = 5. enchanted = 15
      var testScrabble = new Scrabble();
        expect(testScrabble.highestScoreFrom(["enchanted", "dog","sizzles", "cat"])).toEqual("sizzles");
    });

    it('Should return highestScoreFrom tied set of words', function() {
      // sizzles = 25, fuzz = 25, dog = 5, cat = 5. enchanted = 15
      var testScrabble = new Scrabble();
      var tiedCollection = ["quasi","cat", "biz", "milk", "zib"];
        expect(testScrabble.highestScoreFrom(tiedCollection)).toEqual("biz");
    });

    // var multi_tied_Collection = ["zib","quasi","cat", "biz", "milk"];
    /* If the there are multiple words that are the same score and same length, pick the first one in supplied list.*/
    // zib = 14, quasi = 14,  cat = 5, biz = 14, milk = 10
    // 3 way tie between: zib, quasi, biz.
    // zib is the first one in list.
    it('Should return highestScoreFrom tied set of words', function() {
      // sizzles = 25, fuzz = 25, dog = 5, cat = 5. enchanted = 15
      var testScrabble = new Scrabble();
      var multi_tied_Collection = ["zib","quasi","cat", "biz", "milk"];
        expect(testScrabble.highestScoreFrom(multi_tied_Collection)).toEqual("zib");
    });






  });



});// end of giant describe
