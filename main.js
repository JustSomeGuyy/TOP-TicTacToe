const gameBoard = document.querySelectorAll('#gameBoard div');
let playerOneName = document.getElementById('playerOne');

// creating the playable game spaces into an array format
let playableSpaces = [];

for (let i = 0; i < gameBoard.length; i++){
    playableSpaces.push(gameBoard[i]);
}

console.log(playableSpaces);

// creates new players
let players = [];

function player(name, char){
    this.name = name;
    this.piece = char;
    return this;
};

function newPlayer(){
    let name = document.getElementById('playerName').value;
    let char = document.getElementById('gameChar').value;
    let newPlayer = new player(name, char);
    players.push(newPlayer);
};

function display(){
    
}

// const playerOne = player('Tyler', 'X');
// const playerTwo = player('AI', 'O');

console.log(players);