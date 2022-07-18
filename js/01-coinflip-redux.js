// variables
let coinFlip;
let counter = parseInt(prompt('Please enter a certain amount of times that how many times you want to play this game, and it must more than 0.'));

// Method 1: for loop and if...else
// functions
for (i=0; i<counter; i++) {
    let ranNumber = Math.round(Math.random());
    let coinFlip = ranNumber;
    console.log(coinFlip);
    if (coinFlip === 0) {
        console.log('It\'s 0, heads!');        
    } else {
        console.log('It\'s 1, tails!'); 
    }; // End if... else
} // End for loop

// Method 2: for loop and if...else if
// functions
for (i=0; i<counter; i++) {
    let ranNumber = Math.round(Math.random());
    let coinFlip = ranNumber;
    console.log(coinFlip);
    if (coinFlip === 0) {
        console.log('It\'s 0, heads!');        
    } else if (coinFlip === 1) {
        console.log('It\'s 1, tails!'); 
    }; // End if... else if
} // End for loop