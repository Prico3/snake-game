//Board
let blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context;


//create the board
window.onload = function () {
    board = document.getElementById("board"); //take element from html
    board.height = rows * blockSize; //set the height
    board.width = cols * blockSize; //set the width
    context = board.getContext("2d"); //used for drawing on the board


    update();

}

function update() {
    context.fillstyle = "black";
    context.fillRect(0, 0, board.width, board.height);
}