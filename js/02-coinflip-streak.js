// variables
let coinFlip;

// functions
do {
    let randomNum = Math.round(Math.random());
    let coinFlip = randomNum;
    if (coinFlip ===0 ) {
        console.log('It\'s 0, heads!');        
    } else {
        console.log('It\'s 1, tails!');
        break;
    };
} while (coinFlip != 1 );