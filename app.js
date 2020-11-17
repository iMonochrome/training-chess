
const board = document.getElementById("Chessboard");
const boardletters = document.querySelector(".letters")

let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

for (let i = 0; i < 8; ++i) {
    for (let j = 0; j < 8; ++j) {
        const square = document.createElement("div");
        board.appendChild(square);
        square.classList.add(`square`);
        square.classList.add(`${i % 2 ? 'odd' : 'even'}`)
        square.id = `["${letters[j]}","${i + 1}"]`
    }
}
//add class and id 
chess.map((c, i) => {
    const chessname = (c.pieceType)
    const chesscolor = (c.player)
    const location = JSON.stringify(c.currentSquare)
    const element = document.getElementById(location)
    element.style.backgroundImage = `url(./merida/${c.image}.svg)`
    element.classList.add(`${chessname}`)
    element.classList.add(`${chesscolor}`)
})


//get position for chesspiece
const getNextStep = (pieceType, currentSquare, player) => {
    let newArray = []

    //pawn move
    if (pieceType == 'pawn' && player == 'white') {
        let index2 = currentSquare.splice(1, 1)
        let match
        let integer = parseInt(index2, 10)
        for (let i = 0; i < 2; ++i) {
            integer -= 1
            match = currentSquare.concat(`${integer}`)
            newArray.push(match);
        }
    }
    return newArray
}
//
// const newArray = getNextStep('pawn', `${pawnid}`, 'white')
//
const changeColorForNextStep = (newArray) => {
    for (let i = 0; i < newArray.length; ++i) {
        //lay du lieu theo thu tu trong arrray de khong co the chuyen thanh 1 string
        let newStep = document.getElementById([`["${newArray[i][0]}","${newArray[i][1]}"]`])
        newStep.style.backgroundColor = "red"
    }
}
const clearColorForNextStep = (newArray) => {
    for (let i = 0; i < newArray.length; ++i) {
        let newStep = document.getElementById([`["${newArray[i][0]}","${newArray[i][1]}"]`])
        newStep.style.backgroundColor = ""
    }
}
let x = document.getElementsByClassName("pawn white")
let pawn = document.querySelectorAll(".pawn.white")
// let pawnid = document.getAttribute("id")
console.log(pawn)
pawn.forEach(item => {
    item.addEventListener("mouseover", function () {
        const currentSquare = JSON.parse(this.getAttribute("id"))
        const pieceType = this.classList[2]
        const player = this.classList[3]
        console.log(pieceType, currentSquare, player)
        const newArray = getNextStep(pieceType, currentSquare, player)
        changeColorForNextStep(newArray)
    })
})

pawn.forEach(item => {
    item.addEventListener("mouseout", function () {
        const currentSquare = JSON.parse(this.getAttribute("id"))
        const pieceType = this.classList[2]
        const player = this.classList[3]
        console.log(pieceType, currentSquare, player)
        const newArray = getNextStep(pieceType, currentSquare, player)
        clearColorForNextStep(newArray)
    })
})
