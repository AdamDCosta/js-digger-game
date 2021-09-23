
// --> DOM ELEMENTS

const startBtn = document.querySelector(".intro__button")

// const userCharacter = document.querySelector(".character")

const startPage = document.querySelector("header")

// Arrow buttons
const directionBtns = document.querySelectorAll(".directions__button")
const upArrow = document.querySelector("directions__button--up")
const rightArrow = document.querySelector("directions__button--right")
const downArrow = document.querySelector("directions__button--down")
const leftArrow = document.querySelector("directions__button--left")


const gameArea = document.querySelector(".game__area")

const startGame = () => {
  startBtn.addEventListener("click", () => {
    console.log(startPage)
    startPage.classList.remove("intro")
    startPage.classList.add("hide-intro")

    console.log("hello")
    
  })
}

const generateGrid = (rows, cols) => {
  gameArea.style.setProperty("grid-template-rows", "repeat(" + rows + ", 1fr)");
  gameArea.style.setProperty("grid-template-columns", "repeat(" + cols + ", 1fr)");
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    gameArea.appendChild(cell).className = "game__area--cell game__area--cell" + i;
  };
};


startGame();
generateGrid(12, 12);

// make array of generated grid cells

const generatedGrid = document.querySelectorAll(".game__area--cell");
const gameCells = Array.from(generatedGrid)
console.log(gameCells)


// To move character


const newPlayer = () => {
  let user = document.createElement("div");
  user.classList.add("character")
  firstGameCell = document.querySelector(".game__area--cell")
  firstGameCell.appendChild(user);
  

}

newPlayer();



// 1. store players position
const updatePosition = (position) => {
  position.appendChild(user);
}

// 2. click on direction

// 3. perform move (if valid - eg not going off board or into an object)

// 4. calculate new position after move

// 5. update position


// press up -> move to i - 12 on array, unless i + 11 > 143


// press right -> move along 1 index (unless at edge of game area) 
// --> if i + 1 can be divided by 12?

// press down -> move to i + 12 on array, unless i + 11 > 143 

// press left -> move i - 1 on the array, unless i can be divided by 12?


  directionBtns.forEach(directionBtn => {
    directionBtn.addEventListener("click", (event) => {
      let direction = event.target.value
      switch(direction) {
        // case "up":
        //   gameCells[i - 12];
        //   break;
        case "right":
          let cellPosition = gameCells[1];
        //   break;
        // case "down":
        //   gameCells[i + 12];
        //   break;
        // case "left":
        //   gameCells[i--];
        //   break;     
      }
      
  
      updatePosition(cellPosition);
        
      
  })

  })
// let cellPosition = document.querySelector(".game__area--cell")