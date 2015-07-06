// Basic variables for movement and firing
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var firePressed = false;

//Event listeners for when certain key is pressed
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/*
 * Initialization of basic movement and firing for computer
 * Uses up, down, left, right, and spacebar
 */

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
    else if (e.keyCode == 32){
        firePressed = true;
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

/*
 * Basic movement and firing for mobile devices
 * Uses buttons on the screen
 */
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

//Fire button
function fireOn(){
    firePressed = true;
}
function fireOff(){
    firePressed = false;
}

//------------------------------------------------------------------------------
/*
 * Drawing things on the canvas
 * 
 */

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var shipHeight = 25;
var shipWidth = 25;
var bulletRadius = 4;
var dy = 2;
var shipX = (canvas.width-shipWidth)/2;
var shipY = (canvas.height-shipHeight)/2;
var bulletY = shipY - 5;
var bulletX = shipX + 15;

//Draws the ship
function drawShip() {
    ctx.beginPath();
    ctx.rect(shipX, shipY, shipWidth, shipHeight);
    ctx.shadowBlur=5;
    ctx.shadowOffsetX=5;
    ctx.shadowColor="black";
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
//Draw the bullet
function drawBullet() {
    ctx.beginPath();
    ctx.arc(shipX+15, bulletY, bulletRadius, 0, Math.PI*2);
    ctx.fillPath="#111111";
    ctx.fill();
    ctx.closePath();
}
//Bullet movement
function fireBullet(){
    drawBullet();
    bulletY-=dy;
        
    if (bulletY<=0){
        bulletY=shipY-5;
        firePressed = false;
    }
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawShip();
    
    
    if(rightPressed && shipX < canvas.width-shipWidth) {
        shipX += 7;
    }
    else if(leftPressed && shipX > 0) {
        shipX -= 7;
    }
    else if (downPressed && shipY < canvas.height-shipWidth){
        shipY += 7;
    }
    else if (upPressed && shipY > 0){
        shipY -= 7;
    }
    else if (firePressed){
        fireBullet();        
    }
}
setInterval(draw,10);

