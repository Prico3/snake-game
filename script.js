//Board
let blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context;

//snake head
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

//food
let foodX;
let foodY;


//create the board
window.onload = function () {
    board = document.getElementById("board"); //take element from html
    board.height = rows * blockSize; //set the height
    board.width = cols * blockSize; //set the width
    context = board.getContext("2d"); //used for drawing on the board


    update();

}

function update() {
    //board
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    //snake
    context.fillStyle = "lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    //food
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
}

//place the food randomly
function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}