
let won = 0; // let variable because it will change//
let tie = 0;  // posible scenarios when playing//
let lost = 0; 


// repeat function every time user click choices//
function play(userChoice){ //userChoice is taking from onclick HTML//
    const choices = ['rock', 'paper', 'scissors']; // List chocices (array)//
    const emojis = { // Object to store key and value//
        rock:'✊',
        paper:'✋',
        scissors:'✌️'
    };
    document.getElementById('user').textContent= emojis[userChoice]; 
    const cpuChoice = choices[Math.trunc(Math.random() * 3)]; //make cpu take ramdon value//
    document.getElementById('cpu').textContent= emojis[cpuChoice];

    console.log(cpuChoice) // print cpuchoice in console, not functional on the screen, more backend//

if (userChoice === cpuChoice){  // My choice is equal to cpu choice is tie//
    document.querySelector('.message').textContent = 'Tie 🤝';
    tie++;  // tie++ = tie + 1, tie = 0 + 1 , tie=1//
    document.getElementById('tie').textContent=tie;
    document.querySelector('.main').style.backgroundColor = 'darkgray';

} else if(  //posible user and cpu choices//
    (userChoice === 'rock' && cpuChoice === 'scissors') || // multioe ways to win//
    (userChoice === 'paper' && cpuChoice ==='rock') || // if i pick this and(&&) cpu that or(||) //
    (userChoice === 'scissors' && cpuChoice === 'paper')
) {
    document.querySelector('.message').textContent = '🏆 You won!'; // change the content on the screen//
    won++; // won++ = won + 1, won = 0 + 1 , won=1//
    document.getElementById('won').textContent=won;
    document.querySelector('.main').style.backgroundColor = 'lightgreen';
} else {
    document.querySelector('.message').textContent = '❌ You lost!'; // if not equal or user chocices selected above//
    lost++; // lost++ = lost + 1, lost = 0 + 1 , lost=1//             //then user lost//
    document.getElementById('lost').textContent=lost;
    document.querySelector('.main').style.backgroundColor = '#c7080c';
}}

 document.querySelector('.reset').addEventListener('click',function(){ // when user click reset, code will://
    tie = 0; // set variable to 0 for console reset//
    won = 0;
    lost = 0;
    document.getElementById('tie').textContent=0;
    document.getElementById('won').textContent=0; // reset back to default without reloading web//
    document.getElementById('lost').textContent=0;
    document.querySelector('.message').textContent = 'Good Luck!🍀';
    document.querySelector('.main').style.backgroundColor = 'white';
    document.getElementById('user').textContent= '';
    document.getElementById('cpu').textContent= '';

    })