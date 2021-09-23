
// --> DOM ELEMENTS

const startBtn = document.querySelector(".intro__button")

// const userCharacter = document.querySelector(".character")

const startPage = document.getElementsByClassName("intro")

// Arrow buttons
const directionBtns = document.querySelector(".game__buttons")
const upArrow = document.querySelector("game__buttons--up")
const rightArrow = document.querySelector("game__buttons--right")
const downArrow = document.querySelector("game__buttons--down")
const leftArrow = document.querySelector("game__buttons--left")

// To move character
// --> you need arrow button
// when arrow pressed - character moves in corresponding direction

const gameArea = document.querySelector(".game__area")


const generateGrid = (rows, cols) => {
  gameArea.style.setProperty("grid-template-rows", "repeat(" + rows + ", 1fr)");
  gameArea.style.setProperty("grid-template-columns", "repeat(" + cols + ", 1fr)");
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    gameArea.appendChild(cell).className = "game__area--cell game__area--cell" + i;
  };
};

const startGame = () => {
  startBtn.addEventListener("click", () => {
    startPage.classList.toggle("hide-intro")

    console.log("hello")
    
  })
}

generateGrid(12, 12);

const generatedGrid = document.querySelectorAll(".game__area--cell");

const gameCells = Array.from(generatedGrid)
console.log(gameCells)


// const newUser = () => {
// }
let user = document.createElement("div");
user.classList.add("character")
let firstGameCell = document.querySelector(".game__area--cell")
firstGameCell.appendChild(user);


// let position = {
//   x: 0,
//   y: 0
// }

let cellPosition = gameCells[i]

// press up -> move to i - 12 on array, unless i + 11 > 143


// press right -> move along 1 index (unless at edge of game area) 
// --> if i + 1 can be divided by 12?

// press down -> move to i + 12 on array, unless i + 11 > 143 

// press left -> move i - 1 on the array, unless i can be divided by 12?

const moveCharacter = () => {
  directionBtns.addEventListener("click", (event) => {
    let direction = event.target.value
    switch(direction) {
      case "up":
        gameCells[i- 12];
        break;
      case "right":
        gameCells[i++]
        break;
      case "down":
        gameCells[i + 12];
        break;
      case "left":
        gameCells[i--];
        break;     
    }

    // let moveToCell = 

  })
}