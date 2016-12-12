
var Scrabble = function() {};

Scrabble.prototype = {


  helloWorld: function() {return "Hello World!";},

  // score(word): returns the total score value for the given word. The word is input as a string (case insensitive). The chart below shows the point value for a given letter.



  score: function(word) {
    // insure input of word is clean. turning everythig into uppercase.
// added this testing of word here. Ala Quai, live code. 
    if(typeof(word) !== "string") {
      throw new TypeError();
    }

    word = word.toUpperCase();

    // create starting point, for score.
    var score = 0;

    var letter;
    // letter associated with score.
    var alphabet = {
      A: 1,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 4,
      G: 2,
      H: 4,
      I: 1,
      J: 8,
      K: 5,
      L: 1,
      M: 3,
      N: 1,
      O: 1,
      P: 3,
      Q: 10,
      R: 1,
      S: 1,
      T: 1,
      U: 1,
      V: 4,
      W: 4,
      X: 8,
      Y: 4,
      Z: 10 };

      // loop through whatever word entered, look at the letters specifically.
      for(var i = 0; i < word.length; i++) {
        // store each index of char into var letter.
        letter = word[i];
        //  console.log("letter ",letter); // c a t

        score += alphabet[letter];
        // // console.log("alphabet",alphabet, alphabet[letter]);
        // console.log("score: ", score, word);
      } // word loop end.
      // console.log("You Played:", word ,", worth: ", score, "points");
      // "You Played" [cat] worth: [5] points
      return score;

    }, //score function end

    // highestScoreFrom(arrayOfWords): returns the word in the array with the highest score.
    highestScoreFrom: function(words) {
      // create initial holder for score.
      var max_score = 0;
      // score the current_word.
      var max_scored_words = [];


      for(var i = 0; i < words.length; i++) {
        var current_word_score = this.score(words[i]);
        // console.log("currentwordscore: ", current_word_score);
        // console.log("current_word_score: ", current_word_score);

        if (max_score < current_word_score) {

          max_score = current_word_score;

        }

      }
      for(i = 0; i < words.length; i++) {
        // if the hightest score word & point put them into an empty array
        // dealing with tie.
        if (Scrabble.prototype.score(words[i]) == max_score)
          max_scored_words.push(words[i]);
      }

      // console.log("max_scored_words:", max_scored_words, "for", max_score, "points");

      var shortest_word = max_scored_words[0];
      var winner;
      for(i = 0; i < max_scored_words.length; i++) {
        // console.log("max scored length: ",max_scored_words[i].length);
        // if their is highest scoring word tie go with the one with shortest letters.
        if (max_scored_words[i].length < shortest_word.length) {
          shortest_word = max_scored_words[i];
        }
      }
      // console.log("shortest word: ",shortest_word);
      return shortest_word;
    }

  }; // scrabble end
//
  // create a scrabble object?
  var myScrabble = new Scrabble();


/*---------------------------------------------------------------*/

  // Test 1.
  /* score(word): returns the total score value for the given word. The word is input as a string (case insensitive). The chart below shows the point value for a given letter. */
  // tests checked on lines 52-56.
  // myScrabble.score("cat");


  // Test 2.
  /* highestScoreFrom(arrayOfWords): returns the word in the array with the highest score. */
  // sizzles = 25, dog = 5, cat = 5. enchanted = 15
  // create a collection of words.
  var collection = ["enchanted", "dog","sizzles", "cat"];
  // using new function name. I should return the highest scored word in array.
  // which in this case is sizzles.
  // console.log("Predict highestScoreFrom should return <sizzles>",myScrabble.highestScoreFrom(collection));
  // => should return sizzles as highestscorefrom

// Test 3.
/* Note that it’s better to use fewer tiles, so if the top score is tied between multiple words, pick the one with the fewest letters. */
//WORD KEY:
// biz = 14, quasi = 14, zib = 14, cat = 5, milk = 10
// If the collection above was passed in. Biz & Quasi have same score. (i.e. tied).
var tiedCollection = ["quasi","cat", "biz", "milk", "zib"];
console.log("Should see biz: ", myScrabble.highestScoreFrom(tiedCollection)); // biz is seen, as its shortest word of the tied words.


// Test 3.
/* If the there are multiple words that are the same score and same length, pick the first one in supplied list.*/
// zib = 14, quasi = 14,  cat = 5, biz = 14, milk = 10
// 3 way tie between: zib, quasi, biz.
// zib is the first one in list.
var multi_tied_Collection = ["zib","quasi","cat", "biz", "milk"];
console.log("should see zib:", myScrabble.highestScoreFrom(multi_tied_Collection));


// Test 4.
/* Note that there is a bonus (50 points) for using all seven letters. If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles. */
// buzzcut = 29, fuzzing = 29, cat = 5, milk = 10
// QUARTZ


  // Previous test example of what it make look like.


  // it 'tie between words of length 7 and another word of smaller length with same point value.' do
  //   expect(Scrabble::Scoring.highest_score_from(["sizzles", "fuzz", "dog", "cat"])).must_equal("sizzles")
  // end


  // it 'Two word tie goes to the word with fewest letters' do
  //   expect(Scrabble::Scoring.highest_score_from(["biz","quasi", "cat", "milk"])).must_equal("biz")
  // end

  module.exports = Scrabble;
