
// --> DOM ELEMENTS

const startBtn = document.querySelector(".intro__button")

// const userCharacter = document.querySelector(".character")

const startPage = document.getElementsByClassName("intro")

// Arrow buttons
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

let 