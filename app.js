const board = document.querySelector(".board");
const boardletters = document.querySelector(".letters")
const boardnumbers = document.querySelector(".numbers")
let letters = ["a","b","c","d","e","f","g","h"];
let index = 0;
let black = false;
let num =1;

// Create name of column and name of row in chessboard

for(let i = 0; i < 8; ++i){
    let letter = document.createElement("li");
    letter.textContent = letters[i];    
    boardletters.appendChild(letter);
    let numbers = document.createElement("li");
    numbers.textContent = num++;
    boardnumbers.appendChild(numbers);
}

let map = [
    3, 5, 4, 2, 1, 4, 5, 3,
    6, 6, 6, 6, 6, 6, 6, 6,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,   
    12,12,12,12,12,12,12,12,
    9,11,10, 8, 7,10,11, 9,
  ];

// Create each square for board and apply css property for each square, add chess piece 

for(let i = 0; i < 64; ++i){
    const square = document.createElement("div");
    if(black){
        square.classList.add("square");
         square.classList.add("black");
         index++;
         black = !black;
    } else{
        square.classList.add("square");
        square.classList.add("white");
        index++;
        black = !black;
    }

    square.innerHTML = !map[i] ? "" : "&#"+ (9811+map[i]) +";";

    board.appendChild(square);

    if(index === 8){
        black = !black;
        index = 0;
    }

   
}


//add figure of chess piece for chess board
// create a map for chess board and name position for each square by number

var rook = [0,7,56,63];
var knight = [1,6,57,62];
var bishop = [2,5,58,61];
var king = [3,59];
var queen = [4,60]
var pawn = [8,9,10,11,12,13,14,15,48,49,50,51,52,53,54,55];

// for (let i=0; i< 64; i++){
    // var div = document.createElement("div");
    // document.getElementById("Chessboard").
    // appendChild(div).
    // style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? 'white' : 'black';    
    // div.innerHTML = i;
    // if(rook.indexOf(i) !== -1){
        // div.innerHTML = 'r';
    // }
    // if(knight.indexOf(i) !== -1){
        // div.innerHTML = 'n';
    // }
    // if(bishop.indexOf(i) !== -1){
        // div.innerHTML = 'b';
    // }
    // if(king.indexOf(i) !== -1){
        // div.innerHTML = 'k';
    // }
    // if(queen.indexOf(i) !== -1){
        // div.innerHTML = 'q';
    // }
    // if(pawn.indexOf(i) !== -1){
        // div.innerHTML = 'p';
    // }
// }










 






























 






























 






























 






























 






























 






























 






























 






























 






























 






























 






























 






























 






























 



















