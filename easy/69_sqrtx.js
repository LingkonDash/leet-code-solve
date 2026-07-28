/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0
    if (x === 1) return 1
     let guess = x/2
    while(true) {
        let newGuess = (x / guess + guess)/2
        if((guess - newGuess) < 0.0000000001) {
            return Math.floor(Math.abs(newGuess));
        }
        guess = newGuess;
    }
};