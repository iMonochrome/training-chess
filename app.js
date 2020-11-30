
const board = document.getElementById("Chessboard");
const boardletters = document.querySelector(".letters")
const boardnumber = document.querySelector(".numbers")
let num = 1
let letters = ["1", "2", "3", "4", "5", "6", "7", "8"];

for (let i = 0; i < 8; i++) {
    let letter = document.createElement("li")
    letter.textContent = letters[i]
    boardletters.appendChild(letter)
    let number = document.createElement('li')
    number.textContent = num++
    boardnumber.appendChild(number)
}




for (let i = 0; i < 8; ++i) {
    for (let j = 0; j < 8; ++j) {
        const square = document.createElement("div");
        board.appendChild(square);
        square.classList.add(`square`);
        square.classList.add(`${i % 2 ? 'odd' : 'even'}`)
        square.id = `["${j + 1}","${i + 1}"]`
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
//Function for chess to go Horizontally of white
const goHorizontalWhite = (i, currentSquare) => {
    let nextItemsClass = document.getElementById(`["${i}","${currentSquare}"]`).classList
    if (nextItemsClass.length > 2) {
        nextItemsClass[3] === 'black' && nextItemsClass.add('eat')
        return true
    } else {
        nextItemsClass.add('jump')
        return false
    }
}
//Function for chess to go vertically of white
const goVerticalWhite = (currentSquare, i) => {
    let nextItemsClass = document.getElementById(`["${currentSquare[0]}","${i}"]`).classList
    if (nextItemsClass.length > 2) {
        nextItemsClass[3] === 'black' && nextItemsClass.add('eat')
        return true
    } else {
        nextItemsClass.add('jump')
        return false
    }
}
//--
//Function for chess to go Horizontally of black
const goHorizontalBlack = (i, currentSquare) => {
    let nextItemsClass = document.getElementById(`["${i}","${currentSquare}"]`).classList
    if (nextItemsClass.length > 2) {
        nextItemsClass[3] === 'white' && nextItemsClass.add('eat')
        return true
    } else {
        nextItemsClass.add('jump')
        return false
    }
}
//function for chess to go vertically of black
const goVerticalblack = (currentSquare, i) => {
    let nextItemsClass = document.getElementById(`["${currentSquare[0]}","${i}"]`).classList
    if (nextItemsClass.length > 2) {
        nextItemsClass[3] === 'white' && nextItemsClass.add('eat')
        return true
    } else {
        nextItemsClass.add('jump')
        return false
    }
}

//Function for chess go diagonal right white

const goDiagonallyRightWhite = (x, i) => {

    let nextItemsClass = []
    if (document.getElementById(`["${x}","${i}"]`)) {
        nextItemsClass = document.getElementById(`["${x}","${i}"]`).classList
    }
    else return true
    if (nextItemsClass.length > 2) {
        nextItemsClass[3] === 'black' && nextItemsClass.add('eat')
        return true
    } else {
        nextItemsClass.add('jump')
    }
}
//Function for chess go diangonal left white

const goDiagonallyLeftWhite = (i, x) => {
    if (document.getElementById(`["${i}","${x}"]`)) {
        nextItemsClass = document.getElementById(`["${i}","${x}"]`).classList
    }
    else return true
    if (nextItemsClass.length > 2) {
        nextItemsClass[3] === 'black' && nextItemsClass.add('eat')
        return true
    } else {
        nextItemsClass.add('jump')
    }
}
//Function for chess go diagonal right black

const goDiagonallyRightBlack = (x, i) => {

    let nextItemsClass = []
    if (document.getElementById(`["${x}","${i}"]`)) {
        nextItemsClass = document.getElementById(`["${x}","${i}"]`).classList
    }
    else return true
    if (nextItemsClass.length > 2) {
        nextItemsClass[3] === 'white' && nextItemsClass.add('eat')
        return true
    } else {
        nextItemsClass.add('jump')
    }
}
//Function for chess go diangonal left black

const goDiagonallyLeftBlack = (i, x) => {
    if (document.getElementById(`["${i}","${x}"]`)) {
        nextItemsClass = document.getElementById(`["${i}","${x}"]`).classList
    }
    else return true
    if (nextItemsClass.length > 2) {
        nextItemsClass[3] === 'white' && nextItemsClass.add('eat')
        return true
    } else {
        nextItemsClass.add('jump')
    }
}


const getNextStep = (pieceType, currentSquare, player) => {
    let newArray = []
    // pawn white and black 
    switch (pieceType + "|" + player) {
        //rock white and black
        case 'rock' + "|" + 'white': {
            for (let i = currentSquare[0] * 1 + 1; i < 9; i++) { // [2,4]
                // [3, 4]
                if (goHorizontalWhite(i, currentSquare[1])) break
            }
            for (let i = currentSquare[0] * 1 - 1; i > 0; i--) { // [2,4]
                // [3, 4]
                if (goHorizontalWhite(i, currentSquare[1])) break
            }
            for (let i = currentSquare[1] * 1 + 1; i < 9; i++) { // [2,4]
                // [2, 5]
                if (goVerticalWhite(currentSquare[0], i)) break
            }
            for (let i = currentSquare[1] * 1 - 1; i > 0; i--) { // [2,4]
                // [2, 5]
                if (goVerticalWhite(currentSquare[0], i)) break
            }
        }
            break;
        case 'rock' + "|" + 'black': {
            for (let i = currentSquare[0] * 1 + 1; i < 9; i++) { // [2,4]
                // [3, 4]
                if (goHorizontalBlack(i, currentSquare[1])) break
            }
            for (let i = currentSquare[0] * 1 - 1; i > 0; i--) { // [2,4]
                // [3, 4]
                if (goHorizontalBlack(i, currentSquare[1])) break
            }
            for (let i = currentSquare[1] * 1 + 1; i < 9; i++) { // [2,4]
                // [2, 5]
                if (goVerticalblack(currentSquare[0], i)) break
            }
            //currentSquare[1] * 1 => inerger
            for (let i = currentSquare[1] * 1 - 1; i > 0; i--) { // [2,4]
                // [2, 5]
                if (goVerticalblack(currentSquare[0], i)) break
            }
        }
            break;
        // bishop black and white
        case 'bishop' + "|" + 'white': {
            // let index1 = parseInt(currentSquare[0]) 
            //go right, down
            for (i = currentSquare[1] * 1 + 1, x = currentSquare[0] * 1; i < 9; i++) { //[3,5]
                //[4,6]
                x += 1
                if (goDiagonallyRightWhite(x, i)) break
            }
            //go right, up
            for (i = currentSquare[1] * 1 - 1, x = currentSquare[0] * 1; i > 0; i--) { //[3,5]
                //[4,4],[5,3]
                x += 1
                if (goDiagonallyRightWhite(x, i)) break
            }
            //go left, up
            for (i = currentSquare[0] * 1 - 1, x = currentSquare[1] * 1; i > 0; i--) { //[3,5]
                //[2,4],[1,3]
                x -= 1
                if (goDiagonallyLeftWhite(i, x)) break
            }
            //go left,down
            for (i = currentSquare[0] * 1 - 1, x = currentSquare[1] * 1; i > 0; i--) { //[6,2]
                //[5,3],[4,4]
                x += 1
                if (goDiagonallyLeftWhite(i, x)) break
            }
        }
            break;
        case 'bishop' + "|" + 'black': {
            for (i = currentSquare[1] * 1 + 1, x = currentSquare[0] * 1; i < 9; i++) { //[3,5]
                //[4,6]
                x += 1
                if (goDiagonallyRightBlack(x, i)) break
            }
            //go right, up
            for (i = currentSquare[1] * 1 - 1, x = currentSquare[0] * 1; i > 0; i--) { //[3,5]
                //[4,4],[5,3]
                x += 1
                if (goDiagonallyRightBlack(x, i)) break
            }
            //go left, up
            for (i = currentSquare[0] * 1 - 1, x = currentSquare[1] * 1; i > 0; i--) { //[3,5]
                //[2,4],[1,3]
                x -= 1
                if (goDiagonallyLeftBlack(i, x)) break
            }
            //go left,down
            for (i = currentSquare[0] * 1 - 1, x = currentSquare[1] * 1; i > 0; i--) { //[6,2]
                //[5,3],[4,4]
                x += 1
                if (goDiagonallyLeftBlack(i, x)) break
            }
        }
            break;
        case 'queen' + "|" + 'white': {
            for (let i = currentSquare[0] * 1 + 1; i < 9; i++) { // [2,4]
                // [3, 4]
                if (goHorizontalWhite(i, currentSquare[1])) break
            }
            for (let i = currentSquare[0] * 1 - 1; i > 0; i--) { // [2,4]
                // [3, 4]
                if (goHorizontalWhite(i, currentSquare[1])) break
            }
            for (let i = currentSquare[1] * 1 + 1; i < 9; i++) { // [2,4]
                // [2, 5]
                if (goVerticalWhite(currentSquare[0], i)) break
            }
            for (let i = currentSquare[1] * 1 - 1; i > 0; i--) { // [2,4]
                // [2, 5]
                if (goVerticalWhite(currentSquare[0], i)) break
            }
            for (i = currentSquare[1] * 1 + 1, x = currentSquare[0] * 1; i < 9; i++) { //[3,5]
                //[4,6]
                x += 1
                if (goDiagonallyRightWhite(x, i)) break
            }
            //go right, up
            for (i = currentSquare[1] * 1 - 1, x = currentSquare[0] * 1; i > 0; i--) { //[3,5]
                //[4,4],[5,3]
                x += 1
                if (goDiagonallyRightWhite(x, i)) break
            }
            //go left, up
            for (i = currentSquare[0] * 1 - 1, x = currentSquare[1] * 1; i > 0; i--) { //[3,5]
                //[2,4],[1,3]
                x -= 1
                if (goDiagonallyLeftWhite(i, x)) break
            }
            //go left,down
            for (i = currentSquare[0] * 1 - 1, x = currentSquare[1] * 1; i > 0; i--) { //[6,2]
                //[5,3],[4,4]
                x += 1
                if (goDiagonallyLeftWhite(i, x)) break
            }
        }
            break;
        case 'queen' + "|" + 'black': {
            for (let i = currentSquare[0] * 1 + 1; i < 9; i++) { // [2,4]
                // [3, 4]
                if (goHorizontalBlack(i, currentSquare[1])) break
            }
            for (let i = currentSquare[0] * 1 - 1; i > 0; i--) { // [2,4]
                // [3, 4]
                if (goHorizontalBlack(i, currentSquare[1])) break
            }
            for (let i = currentSquare[1] * 1 + 1; i < 9; i++) { // [2,4]
                // [2, 5]
                if (goVerticalblack(currentSquare[0], i)) break
            }
            //currentSquare[1] * 1 => inerger
            for (let i = currentSquare[1] * 1 - 1; i > 0; i--) { // [2,4]
                // [2, 5]
                if (goVerticalblack(currentSquare[0], i)) break
            }
            for (i = currentSquare[1] * 1 + 1, x = currentSquare[0] * 1; i < 9; i++) { //[3,5]
                //[4,6]
                x += 1
                if (goDiagonallyRightBlack(x, i)) break
            }
            //go right, up
            for (i = currentSquare[1] * 1 - 1, x = currentSquare[0] * 1; i > 0; i--) { //[3,5]
                //[4,4],[5,3]
                x += 1
                if (goDiagonallyRightBlack(x, i)) break
            }
            //go left, up
            for (i = currentSquare[0] * 1 - 1, x = currentSquare[1] * 1; i > 0; i--) { //[3,5]
                //[2,4],[1,3]
                x -= 1
                if (goDiagonallyLeftBlack(i, x)) break
            }
            //go left,down
            for (i = currentSquare[0] * 1 - 1, x = currentSquare[1] * 1; i > 0; i--) { //[6,2]
                //[5,3],[4,4]
                x += 1
                if (goDiagonallyLeftBlack(i, x)) break
            }
        }
            break;

        case 'knight' + "|" + 'white': {
            let x = currentSquare[0] * 1
            let y = currentSquare[1] * 1
            let listposition = [`["${x - 1}","${y - 2}"]`, `["${x + 2}","${y + 1}"]`, `["${x + 1}","${y - 2}"]`, `["${x - 2}","${y - 1}"]`,
            `["${x + 1}","${y + 2}"]`, `["${x + 2}","${y - 1}"]`, `["${x - 1}","${y + 2}"]`, `["${x - 2}","${y + 1}"]`]
            ////
            for (let i = 0; i < listposition.length; i++) {
                let nextItemsClass = []
                if (document.getElementById(listposition[i])) {
                    nextItemsClass = document.getElementById(listposition[i]).classList
                } else continue
                if (nextItemsClass.length > 2) {
                    nextItemsClass[3] === 'black' && nextItemsClass.add('eat')
                    continue
                } else {
                    nextItemsClass.add('jump')
                }
            }
        }
            break;
        case 'knight' + "|" + 'black': {
            let x = currentSquare[0] * 1
            let y = currentSquare[1] * 1
            let list = [`["${x - 1}","${y - 2}"]`, `["${x + 2}","${y + 1}"]`, `["${x + 1}","${y - 2}"]`, `["${x - 2}","${y - 1}"]`,
            `["${x + 1}","${y + 2}"]`, `["${x + 2}","${y - 1}"]`, `["${x - 1}","${y + 2}"]`, `["${x - 2}","${y + 1}"]`]

            ////
            for (let i = 0; i < list.length; i++) {
                let nextItemsClass = []
                if (document.getElementById(list[i])) {
                    nextItemsClass = document.getElementById(list[i]).classList
                } else continue
                if (nextItemsClass.length > 2) {
                    nextItemsClass[3] === 'white' && nextItemsClass.add('eat')
                    continue
                } else {
                    nextItemsClass.add('jump')
                }
            }
        }
            break;
        case 'king' + "|" + 'white': {
            let x = currentSquare[0] * 1
            let y = currentSquare[1] * 1
            let listposition = [`["${x - 1}","${y - 1}"]`, `["${x}","${y - 1}"]`, `["${x + 1}","${y - 1}"]`, `["${x + 1}","${y}"]`,
            `["${x + 1}","${y + 1}"]`, `["${x}","${y + 1}"]`, `["${x - 1}","${y + 1}"]`, `["${x - 1}","${y}"]`]
            //
            for (let i = 0; i < listposition.length; i++) {

                let nextItemsClass = []
                if (document.getElementById(listposition[i])) {
                    nextItemsClass = document.getElementById(listposition[i]).classList
                } else continue
                if (nextItemsClass.length > 2) {
                    nextItemsClass[3] === 'black' && nextItemsClass.add('eat')
                    continue
                } else {
                    nextItemsClass.add('jump')
                }
            }
        }
            break;
        case 'king' + "|" + 'black': {
            let x = currentSquare[0] * 1
            let y = currentSquare[1] * 1
            let listposition = [`["${x - 1}","${y - 1}"]`, `["${x}","${y - 1}"]`, `["${x + 1}","${y - 1}"]`, `["${x + 1}","${y}"]`,
            `["${x + 1}","${y + 1}"]`, `["${x}","${y + 1}"]`, `["${x - 1}","${y + 1}"]`, `["${x - 1}","${y}"]`]
            //
            for (let i = 0; i < listposition.length; i++) {
                let nextItemsClass = []
                if (document.getElementById(listposition[i])) {
                    nextItemsClass = document.getElementById(listposition[i]).classList
                } else continue
                if (nextItemsClass.length > 2) {
                    nextItemsClass[3] === 'white' && nextItemsClass.add('eat')
                    continue
                } else {
                    nextItemsClass.add('jump')
                }
            }
        }
            break;
        case 'pawn' + "|" + 'white': {
            let x = currentSquare[0] * 1
            let y = currentSquare[1] * 1
            let eatPosition = [`["${x-1}","${y-1}"]`,`["${x+1}","${y-1}"]`]
            if (y == 7) {
                for (let i = 0; i < 2; i++) {
                    y -= 1
                    let nextItemsClass = document.getElementById(`["${x}","${y}"]`).classList
                    if (nextItemsClass.length > 2) {
                        if (nextItemsClass[3] === 'white') {break}
                            else if (nextItemsClass[3] === 'black') {break}
                    } else {
                        nextItemsClass.add('jump')
                    } 
                }
                for(let i = 0; i < eatPosition.length; i ++){
                    let nextItemsClass = []
                    if(document.getElementById(eatPosition[i])) {
                        nextItemsClass = document.getElementById(eatPosition[i]).classList
                    }else continue
                    if(nextItemsClass.length > 2){
                        nextItemsClass[3] === 'black' && nextItemsClass.add('eat')
                        continue
                    }
                }
            } else {
                let moveOneStep = [`["${x}","${y-1}"]`]
                let nextItemsClass = document.getElementById(moveOneStep).classList
                if (nextItemsClass.length > 2) {
                    if (nextItemsClass[3] === 'white') {break}
                        else if (nextItemsClass[3] === 'black') {break}
                } else {
                    nextItemsClass.add('jump')
                } 
                for(let i = 0; i < eatPosition.length; i ++){
                    let nextItemsClass = []
                    if(document.getElementById(eatPosition[i])) {
                        nextItemsClass = document.getElementById(eatPosition[i]).classList
                    }else continue
                    if(nextItemsClass.length > 2){
                        nextItemsClass[3] === 'black' && nextItemsClass.add('eat')
                        continue
                    }
                }
            }
        }
            break;
            case 'pawn' + "|" + 'black': {
                let x = currentSquare[0] * 1
                let y = currentSquare[1] * 1
                let eatPosition = [`["${x-1}","${y+1}"]`,`["${x+1}","${y+1}"]`]
                //when the pawn in the default posi
                if (y == 2) {
                    for (let i = 0; i < 2; i++) {
                        y += 1
                        let nextItemsClass = document.getElementById(`["${x}","${y}"]`).classList
                        if (nextItemsClass.length > 2) {
                            if (nextItemsClass[3] === 'white') {break}
                                else if (nextItemsClass[3] === 'black') {break}
                        } else {
                            nextItemsClass.add('jump')
                        } 
                    }
                    for(let i = 0; i < eatPosition.length; i ++){
                        let nextItemsClass = []
                        if(document.getElementById(eatPosition[i])) {
                            nextItemsClass = document.getElementById(eatPosition[i]).classList
                        }else continue
                        if(nextItemsClass.length > 2){
                            nextItemsClass[3] === 'white' && nextItemsClass.add('eat')
                            continue
                        }
                    }
                // move position when the pawn not in the default posi
                } else {
                    let moveOneStep = [`["${x}","${y+1}"]`]
                    let nextItemsClass = document.getElementById(moveOneStep).classList
                    if (nextItemsClass.length > 2) {
                        if (nextItemsClass[3] === 'white') {break}
                            else if (nextItemsClass[3] === 'black') {break}
                    } else {
                        nextItemsClass.add('jump')
                    } 
                    for(let i = 0; i < eatPosition.length; i ++){
                        let nextItemsClass = []
                        if(document.getElementById(eatPosition[i])) {
                            nextItemsClass = document.getElementById(eatPosition[i]).classList
                        }else continue
                        if(nextItemsClass.length > 2){
                            nextItemsClass[3] === 'white' && nextItemsClass.add('eat')
                            continue
                        }
                    }
                }
            }
                break;
    }
}

//Calculate next step for pawn
const changeColorForNextStep = (newArray) => {
    for (let i = 0; i < newArray.length; ++i) {
        //lay du lieu theo thu tu trong arrray de  co the chuyen thanh 1 string
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

//Select every div doesn't have  class board
const allClass = document.querySelectorAll('div:not(.board)')

allClass.forEach(item => {
    item.addEventListener("click", function () {
        const currentSquare = JSON.parse(this.getAttribute("id"))
        const pieceType = this.classList[2]
        const player = this.classList[3]
        getNextStep(pieceType, currentSquare, player)

    })
})


//-------------------




