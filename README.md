# DIGGER

A game written in vanilla javascript, styled with SCSS.

## Aim of the game

Dig down and find the treasure. Watch out for the rocks and the mines! Hit a mine and you have 5 seconds to find the treasure before it is game over.

### Elements needed

-> Intro pop-up with instructions
-> Start game button
-> Object/sprite the user controls
-> Background Image
-> Foreground that disappears as your character moves (digs) into the space
-> Objects that act as rocks which blocks the character
-> Mines which once hit start a timer.
-> Timer
-> Treasure chest to find - once found you win the game
-> You win pop-up/ you lose pop-up
-> Play again button


### How it might work

-> Modal pop-up - set to hidden once start game button pressed
-> Start Button - eventListener 'click'

-> Game starts
-> Game 'board' split into a grid
-> One direction click moves character one space? - Or they keep moving in that direction until another direction is pressed/object hit?
-> eventListeners on arrow keys?
-> mobile? direction buttons at bottom of screen? eventListeners

-> character moves -> if grid area is 'free' the foreground disappears as if dug -> character moves to grid area
  -> switch statement?
  -> case 'a' - grid space is empty - user can move - 
  -> case 'b' - grid space contains a rock - user can't move
  -> case 'c'- grid space contains a mine - game over (or a timer starts before game over)
    -> call function to start timer
  -> case 'd' - grid space contains treasure chest - user has won
    -> call function to display modal with eg 'you win'




### DOM Elements

-> Modal pop-up
-> start game button
-> direction buttons
-> game container/board
-> overlay image which can be dug away
-> containers with the objects (rocks, mines and a treasure chest)
  -> can they be randomly placed at start of each game?
  ->
-> Sprite / user controlled image

### Functions/classes

-> Modal pop-up
-> Start Game button eventListener
-> move character (switch statement? like the operators on a    calculator -> if 'left' move left)
-> Remove foreground image when character moves into a space - some kind of toggle a class which sets it to hide?
-> switch statement for objects
-> timer for when user hits a mine
-> End of game modal - both for winning and losing

### Data

-> Object of tiles with what they contain?
const gameTiles {
  tile 1: empty
  tile 2: rock
  tile 3: empty
  tile 4: mine
  etc
}
