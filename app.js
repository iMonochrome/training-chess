
const board = document.getElementById("Chessboard");
const boardletters = document.querySelector(".letters")
const boardnumbers = document.querySelector(".numbers")
let letters = ["A","B","C","D","E","F","G","H"];
let index = 0;
let black = false;
let num =1;


for(let i = 0; i < 8;++i){
    for(let j = 0; j < 8; ++j){
        const square = document.createElement("div");
        board.appendChild(square);
        square.classList.add(`square`);
        square.classList.add(`${i % 2 ? 'odd' : 'even'}`)
        square.id = `["${letters[j]}","${i + 1}"]`
    }
}   

chess.map((c,i) => {
    const location = JSON.stringify(c.currentSquare)
    const element = document.getElementById(location)
    element.style.backgroundImage = `url(./merida/${c.image}.svg)`
})


















