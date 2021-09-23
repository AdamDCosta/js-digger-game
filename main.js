
// --> DOM ELEMENTS

const startBtn = document.querySelector(".intro__button")

const userCharacter = document.querySelector(".character")



// Arrow buttons
const upArrow = document.querySelector("game__buttons--up")
const rightArrow = document.querySelector("game__buttons--right")
const downArrow = document.querySelector("game__buttons--down")
const leftArrow = document.querySelector("game__buttons--left")

// To move character
// --> you need arrow button
// when arrow pressed - character moves in corresponding direction

const gameArea = document.querySelector(".game__area")

const startGame = () => {
  startBtn.addEventListener("click", (event) => {

  })
}

const makeGrid = (rows, cols) => {
  gameArea.style.setProperty('--grid-rows', rows);
  gameArea.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    gameArea.appendChild(cell).className = "game__area--cell";
  };
};

makeGrid(4, 4);