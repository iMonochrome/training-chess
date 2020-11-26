
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


const getNextStep = (pieceType, currentSquare, player) => {
    let newArray = []
    // pawn white and black 
    switch (pieceType + "|" + player) {
        case 'pawn' + "|" + 'white': {

        }
        case 'pawn' + "|" + 'white': {
            let index2 = currentSquare.splice(1, 1)
            let match
            let integer = parseInt(index2, 10)
            for (let i = 0; i < 2; ++i) {
                integer -= 1
                match = currentSquare.concat(`${integer}`)
                newArray.push(match);
            }
            return newArray
        }

        case 'rock' + "|" + 'white': {
            for (let i = currentSquare[0] * 1 + 1; i < 9; i++) { // [2,4]
                // [3, 4]
                let nextItemsClass = document.getElementById(`["${i}","${currentSquare[1]}"]`).classList
                if (nextItemsClass.length > 2) {
                    nextItemsClass[3] === 'black' && nextItemsClass.add('eat')
                    break;
                } else {
                    nextItemsClass.add('jump')
                }
            }
            for (let i = currentSquare[0] * 1 - 1; i > 0; i--) { // [2,4]
                // [3, 4]
                let nextItemsClass = document.getElementById(`["${i}","${currentSquare[1]}"]`).classList
                if (nextItemsClass.length > 2) {
                    nextItemsClass[3] === 'black' && nextItemsClass.add('eat')
                    break;
                } else {
                    nextItemsClass.add('jump')
                }
            }
            for (let i = currentSquare[1] * 1 + 1; i < 9; i++) { // [2,4]
                // [2, 5]
                let nextItemsClass = document.getElementById(`["${currentSquare[0]}","${i}"]`).classList
                if (nextItemsClass.length > 2) {
                    nextItemsClass[3] === 'black' && nextItemsClass.add('eat')
                    break;
                } else {
                    nextItemsClass.add('jump')
                }
            }
            for (let i = currentSquare[1] * 1 - 1; i > 0; i--) { // [2,4]
                // [2, 5]
                let nextItemsClass = document.getElementById(`["${currentSquare[0]}","${i}"]`).classList
                if (nextItemsClass.length > 2) {
                    nextItemsClass[3] === 'black' && nextItemsClass.add('eat')
                    break;
                } else {
                    nextItemsClass.add('jump')
                }
            }
            break;
        }
        case 'rock' + "|" + 'black': {
            for (let i = currentSquare[0] * 1 + 1; i < 9; i++) { // [2,4]
                // [3, 4]
                let nextItemsClass = document.getElementById(`["${i}","${currentSquare[1]}"]`).classList
                if (nextItemsClass.length > 2) {
                    nextItemsClass[3] === 'white' && nextItemsClass.add('eat')
                    break;
                } else {
                    nextItemsClass.add('jump')
                }
            }
            for (let i = currentSquare[0] * 1 - 1; i > 0; i--) { // [2,4]
                // [3, 4]
                let nextItemsClass = document.getElementById(`["${i}","${currentSquare[1]}"]`).classList
                if (nextItemsClass.length > 2) {
                    nextItemsClass[3] === 'white' && nextItemsClass.add('eat')
                    break;
                } else {
                    nextItemsClass.add('jump')
                }
            }
            for (let i = currentSquare[1] * 1 + 1; i < 9; i++) { // [2,4]
                // [2, 5]
                let nextItemsClass = document.getElementById(`["${currentSquare[0]}","${i}"]`).classList
                if (nextItemsClass.length > 2) {
                    nextItemsClass[3] === 'white' && nextItemsClass.add('eat')
                    break;
                } else {
                    nextItemsClass.add('jump')
                }
            }
            for (let i = currentSquare[1] * 1 - 1; i > 0; i--) { // [2,4]
                // [2, 5]
                let nextItemsClass = document.getElementById(`["${currentSquare[0]}","${i}"]`).classList
                if (nextItemsClass.length > 2) {
                    nextItemsClass[3] === 'white' && nextItemsClass.add('eat')
                    break;
                } else {
                    nextItemsClass.add('jump')
                }
            }
            break;
        }
        case 'bishop' + "|" + 'white': {
            index1 = parseInt(currentSquare[0])
            index2 = parseInt(currentSquare[1])
            for(){ //[3,5]
            //[4,6]
            l

            }
        }

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


const allClass = document.querySelectorAll('div:not(.board)')

allClass.forEach(item => {
    item.addEventListener("click", function () {
        const currentSquare = JSON.parse(this.getAttribute("id"))
        const pieceType = this.classList[2]
        const player = this.classList[3]
        getNextStep(pieceType, currentSquare, player)

    })
})

// allClass.forEach(item => {
//     item.addEventListener("mouseout", function () {
//         const currentSquare = JSON.parse(this.getAttribute("id"))
//         removeClass(currentSquare)
//     })
// })


// const removeClass = (currentSquare) => {
//     var element = document.getElementById(`${currentSquare}`);
//     if (element.length > 2) {
//         element.classList.remove("eat");
//     }
// }

//-------------------




