
const board = document.getElementById("Chessboard");
const boardletters = document.querySelector(".letters")

let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];



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
chess.map((c,i) => {
    const chessname = (c.pieceType)
    const chesscolor = (c.player)
    const location = JSON.stringify(c.currentSquare)
    const element = document.getElementById(location)
    element.style.backgroundImage = `url(./merida/${c.image}.svg)`
    element.classList.add(`${chessname}`)
    element.classList.add(`${chesscolor}`)
})

const converLetterToUSCII = (a) =>{return a.charCodeAt(0)}

const getNextStep = (pieceType, currentSquare, player) => {
    let newArray = []
    // pawn white and black 
    switch (pieceType + "|" + player) {
        case 'pawn' + "|" + 'white':{
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
        case 'pawn' + "|" + 'black':{
            let index2 = currentSquare.splice(1, 1)
            let match
            let integer = parseInt(index2, 10)
            for (let i = 0; i < 2; ++i) {
                integer += 1
                match = currentSquare.concat(`${integer}`)
                newArray.push(match);
            }

        return newArray
        }
        case 'rock' + "|" + 'white':{
            let index2 = currentSquare.splice(1,1)
            let match 
            let index1 = parseInt(currentSquare, 10)
            for(let i = 1; i <= 8; ++i){
                match = (`${index1}`).concat(`${i}`)
                newArray.push(match)
            }
            for(let i = 1; i <= 8; ++i){
                match = (`${i}`).concat(index2)
                newArray.push(match)
            }
            newArray = checkValidMove(newArray)
            
            return newArray
        }

    }
}
//remove all invalidmove for rock 
const checkValidMove = (Array) => {
    const chessId = chess.map(item => item.currentSquare.join('').toString())
    const newArray = Array.filter( item => !chessId.includes(item))
   
    // chess.map((f,i) =>{
    //     const ID = (f.currentSquare)
    //     let joinID = ID.join('').toString()
    //     const color = (f.player)
    //     Array = Array.filter(function(item){
    //         return !item.includes(joinID)
    //     })
    //     return Array
    // })
    return newArray
}


//Calculate next step for white pawn
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


let pawn = document.querySelectorAll(".pawn.white, .pawn.black")


pawn.forEach(item => {
    item.addEventListener("mouseover", function () {
        const currentSquare = JSON.parse(this.getAttribute("id"))
        const pieceType = this.classList[2]
        const player = this.classList[3]
        const newArray = getNextStep(pieceType, currentSquare, player)
        changeColorForNextStep(newArray)
    })
})

pawn.forEach(item => {
    item.addEventListener("mouseout", function () {
        const currentSquare = JSON.parse(this.getAttribute("id"))
        const pieceType = this.classList[2]
        const player = this.classList[3]
        const newArray = getNextStep(pieceType, currentSquare, player)
        clearColorForNextStep(newArray)
    })
})
//------------------------
//rock 

let rock = document.querySelectorAll(".rock.white, .rock.black")

rock.forEach(item => {
    item.addEventListener("mouseover", function(){
        const currentSquare = JSON.parse(this.getAttribute("id"))
        const pieceType = this.classList[2]
        const player = this.classList[3]
        const newArray = getNextStep(pieceType, currentSquare, player)
        changeColorForNextStep(newArray)
    })
})
rock.forEach(item => {
    item.addEventListener("mouseout", function(){
        const currentSquare = JSON.parse(this.getAttribute("id"))
        const pieceType = this.classList[2]
        const player = this.classList[3]
        const newArray = getNextStep(pieceType, currentSquare, player)
        clearColorForNextStep(newArray)
    })
})





