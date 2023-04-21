const gameBoard = document.querySelectorAll('#gameBoard div');
const form = document.querySelector('.form-popup');

// Creates A New Player
const players = [];

function player(name, symbol){
    this.name = name;
    this.symbol = symbol;
};

function newPlayer(){
    if(players.length < 2){
        let name = document.getElementById('playerName').value;
        let symbol = players.length === 0 ? 'X' : 'O';
        let newPlayer = new player(name, symbol);
        players.push(newPlayer);
        displayPlayers();
        document.getElementById('popup').reset();
        closeForm();
    } else {
        alert('No more players');
    }
};

function displayPlayers(){
    let display = document.getElementById('playerNames');
    display.innerHTML = '';

    for(let j = 0; j < players.length; j++) {
        let player = players[j];
        let info = '<div class="names">' + '<p>Player: ' + player.name + '</p>' + '<p>Symbol: ' + player.symbol + '</p></div>';
        display.innerHTML += info;
    }
}

// creates the pop-up for the player form
function openForm() {
  document.getElementById("popup").style.display = "block";
}

function closeForm() {
  document.getElementById("popup").style.display = "none";
}

// Creates a computer brain


// Functions for playing the game
let currentPlayer = players[0];
let gameEnded = false;

for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener(
    "click", 
    function() {
        if (this.innerHTML === "" && !gameEnded) {
                this.innerHTML = currentPlayer.symbol;
                this.classList.add(currentPlayer.symbol.toLowerCase());
                checkWin();
            if (currentPlayer === players[0]){
                currentPlayer = players[1];
            }else{
                currentPlayer = players[0];
            }
            } else {
                alert("Can't play here!")
            }
        }
    );
}
// Checks to see if a row was made or not
let winPos = [
    [1, 2, 3], [4, 5, 6], 
    [7, 8, 9], [1, 4, 7], 
    [2, 5, 8], [3, 6, 9], 
    [1, 5, 9], [3, 5, 7]
];

function checkWin() {
    for (let i = 0; i < winPos.length; i++) {
        if (
            document.getElementById(winPos[i][0]).innerHTML === currentPlayer.symbol &&
            document.getElementById(winPos[i][1]).innerHTML === currentPlayer.symbol &&
            document.getElementById(winPos[i][2]).innerHTML === currentPlayer.symbol
            ) {
                document.getElementById(winPos[i][0]).classList.add("win");document.getElementById(winPos[i][1]).classList.add("win");document.getElementById(winPos[i][2]).classList.add("win"); gameEnded = true;
                
                setTimeout(function() {
                    alert(currentPlayer.name + " wins!");
                }, 500);
            }
    }
}
