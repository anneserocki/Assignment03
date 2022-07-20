// count down

let enterNumber = parseInt(prompt('Please enter a number'));
let again= window.prompt("Repeat entering? ", enterNumber);

for (i = enterNumber; i>=0; i--) {
    document.write(i + `<br>`);   
}