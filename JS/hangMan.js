var programing_Languages =[
    'python',
    'javascript',
    'mongoDB',
    'jason',
    'java',
    'html',
    'css',
    'c',
    'csharp',
    'golang',
    'kotlin',
    'php',
    'sql',
    'ruby'
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord(){
    answer = programing_Languages[Math.floor(Math.random() * programing_Languages.length)]
}

function generateButtons(){
    let buttonsHtml = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
        <button
        class = "btn btn-lg btn-primary m-2"
        id='`+ letter +`'
        onClick = "handleGuess('` + letter +`')"
        >
        `+letter+`
        </button>
        `
        ).join('');

        document.getElementById('keyboard').innerHTML=buttonsHtml;
}

function guessedWord(){
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : ' _ ' )).join(''); 

    document.getElementById('wordSpotlight').innerHTML=wordStatus;
}


function handleGuess(chosenLetter){
guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
document.getElementById(chosenLetter).setAttribute('disabled', true);

if(answer.indexOf(chosenLetter)>=0){
    guessedWord();
    checkIfGameWon();
} 
else if (answer.indexOf(chosenLetter) === -1){
        mistakes++;
        updateMistakes();
        checkIfGameLost();
        updatePic();
        
    }
}

function updatePic(){
    document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameWon(){
    if(wordStatus === answer){
        document.getElementById('keyboard').innerHTML= 'YOU WON!!!!';
    }
}

function checkIfGameLost(){
    if(mistakes === maxWrong){
        document.getElementById('wordSpotlight').innerHTML= 'The Answer Was: ' + answer; 
        document.getElementById('keyboard').innerHTML= 'YOU LOST :( ';
    }
}

function reset(){
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/0.jpg';

    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}






function updateMistakes(){
    document.getElementById('mistakes').innerHTML= mistakes;
}

document.getElementById('maxWrong').innerHTML=maxWrong;

randomWord();
generateButtons();
guessedWord();




