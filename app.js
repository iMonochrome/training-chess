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

const map = [
    3, 5, 4, 2, 1, 4, 5, 3,
    6, 6, 6, 6, 6, 6, 6, 6,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0,   
    12,12,12,12,12,12,12,12,
    9,11,10, 8, 7,10,11, 9,
  ];

// Create each square for board and apply css property for each square, add chess pieces

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

    square.classList.add ("&#"+ (9811+map[i]));

    if(index === 8){
        black = !black;
        index = 0;
    }
//Using Chess symbols in Unicode to create image of chess pieces
    square.innerHTML = !map[i] ? "" : "&#"+ (9811+map[i]) +";";

    // if(map[i] != ""){
        // square.classList.add("&#" + (9811+map[i]) +";")
    // }    
//

    board.appendChild(square);

}




//Chess pieces
var chessPieces = {
    'white': {
         'king': '&#9812;',
         'queen': '&#9813;',
         'rook': '&#9814;',
         'bishop': '&#9815;',
         'knight': '&#9816;',
         'pawn': '&#9817;'
    },
    'black': {
         'king': '&#9818;',
         'queen': '&#9819;',
         'rook': '&#9820;',
         'bishop': '&#9821;',
         'knight': '&#9822;',
         'pawn': '&#9823;'
    }
};  



































































































