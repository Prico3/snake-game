//Board
let blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context;

//snake 
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let velocityX = 0;
let velocityY = 0;

let snakeBody = [];

//food
let foodX;
let foodY;

//gameover
let gameOver = false;


//create the board
window.onload = function () {
    board = document.getElementById("board"); //take element from html
    board.height = rows * blockSize; //set the height
    board.width = cols * blockSize; //set the width
    context = board.getContext("2d"); //used for drawing on the board

    placeFood();
    document, addEventListener("keyup", changeDirection);
    //update();
    setInterval(update, 1000 / 10)

}

function update() {
    if (gameOver) {
        return;
    }
    //board
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    //food
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    //when snake eat food, food spawn in another location, and snake grow
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY])
        placeFood();
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY]
    }

    //snake
    context.fillStyle = "lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    //gameover conditions
    if (snakeX < 0 || snakeX > cols * blockSize || snakeY < 0 || snakeY > rows * blockSize) {
        gameOver = true;
        alert("Game Over");
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over");
        }
    }

}

//Change directions of the snake 
function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) { //This cannot alloud to, if the snake go up, go down
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

//place the food randomly
function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}