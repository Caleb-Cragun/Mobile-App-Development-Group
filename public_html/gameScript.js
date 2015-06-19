var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var paddleHeight = 25;
var paddleWidth = 25;
var paddleX = (canvas.width-paddleWidth)/2;
var paddleY = (canvas.height-paddleHeight)/2;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//When a key is pressed
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if (e.keyCode == 38){
        upPressed = true;
    }
    else if (e.keyCode == 40){
        downPressed = true;
    }
}

//When key is not pressed anymore
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if (e.keyCode == 38){
        upPressed = false;
    }
    else if (e.keyCode == 40){
        downPressed = false;
    }
}
//Left button
function leftOn(){
    leftPressed = true;
}
function leftOff(){
    leftPressed = false;
}
//Right button
function rightOn(){
    rightPressed = true;
}
function rightOff(){
    rightPressed = false;
}

//Up button
function upOn(){
    upPressed = true;
}
function upOff(){
    upPressed = false;
}

//Down button
function downOn(){
    downPressed = true;
}
function downOff(){
    downPressed = false;
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    else if (downPressed && paddleY < canvas.height-paddleWidth){
        paddleY += 7;
    }
    else if (upPressed && paddleY > 0){
        paddleY -= 7;
    }
}
setInterval(draw, 10);