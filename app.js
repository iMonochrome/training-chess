
const board = document.getElementById("Chessboard");
const boardletters = document.querySelector(".letters")

let letters = ["A","B","C","D","E","F","G","H"];

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



    const getNextStep = ( pieceType, currentSquare, player ) => { 
        let newArray = []
        //pawn move
        if(pieceType == 'pawn' && player == 'white'){
            let index2 = currentSquare.splice(1,1)
            console.log(index2)
            let calculate
            let integer = parseInt(index2,10)
            for(let i = 0; i < 2; ++i){
                integer += 1
                calculate = currentSquare.concat(integer)
                newArray.push(calculate);
                
            }
        }
        return newArray
    }



let letters = ["A","B","C","D","E","F","G","H"];
let asciiKeys = [];

for(let i = 0; i < letters.length; ++i){
    asciiKeys.push(letters[i].charCodeAt(0));
}       
console.log(asciiKeys)
let asciicode = currentSquare[0].charCodeAt(0);
        console.log(asciicode);





