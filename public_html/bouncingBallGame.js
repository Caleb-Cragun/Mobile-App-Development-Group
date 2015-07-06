var canvas = document.getElementById("myCanvas");
//----------------------------------------------------------------------
//Ball
//Basic variables for position and movement

var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
//Draw ball and color it
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#333333";
    ctx.fill();
    ctx.closePath();
}

//----------------------------------------------------------------------
//Ball2
var ctx2 = canvas.getContext("2d");
var x2 = canvas.width / 9;
var y2 = canvas.height - 30;
var dx2 = -2;
var dy2 = 2;
//Draw ball and color it
function drawBall2() {
    ctx2.beginPath();
    ctx2.arc(x2, y2, ballRadius, 0, Math.PI * 2);
    ctx2.fillStyle = "#333333";
    ctx2.fill();
    ctx2.closePath();
}

//----------------------------------------------------------------------
//Ball3
var ctx3 = canvas.getContext("2d");
var x3 = canvas.width - 40;
var y3 = canvas.height - 30;
var dx3 = 2;
var dy3 = 2;
//Draw ball and color it
function drawBall3() {
    ctx3.beginPath();
    ctx3.arc(x3, y3, ballRadius, 0, Math.PI * 2);
    ctx3.fillStyle = "#333333";
    ctx3.fill();
    ctx3.closePath();
}

//----------------------------------------------------------------------
//Ball4
var ctx4 = canvas.getContext("2d");
var x4 = canvas.width / 9;
var y4 = canvas.height - 150;
var dx4 = -2;
var dy4 = 2;
//Draw ball and color it
function drawBall4() {
    ctx4.beginPath();
    ctx4.arc(x4, y4, ballRadius, 0, Math.PI * 2);
    ctx4.fillStyle = "#333333";
    ctx4.fill();
    ctx4.closePath();
}

//----------------------------------------------------------------------
//Ball5
var ctx5 = canvas.getContext("2d");
var x5 = canvas.width - 40;
var y5 = canvas.height - 150;
var dx5 = -2;
var dy5 = 2;
//Draw ball and color it
function drawBall5() {
    ctx5.beginPath();
    ctx5.arc(x5, y5, ballRadius, 0, Math.PI * 2);
    ctx5.fillStyle = "#333333";
    ctx5.fill();
    ctx5.closePath();
}

//----------------------------------------------------------------------
//Ball6
var ctx6 = canvas.getContext("2d");
var x6 = canvas.width / 9;
var y6 = canvas.height - 320;
var dx6 = 2;
var dy6 = 2;
//Draw ball and color it
function drawBall6() {
    ctx6.beginPath();
    ctx6.arc(x6, y6, ballRadius, 0, Math.PI * 2);
    ctx6.fillStyle = "#333333";
    ctx6.fill();
    ctx6.closePath();
}

//----------------------------------------------------------------------
//Ball7
var ctx7 = canvas.getContext("2d");
var x7 = canvas.width / 2;
var y7 = canvas.height - 320;
var dx7 = 2;
var dy7 = -2;
//Draw ball and color it
function drawBall7() {
    ctx7.beginPath();
    ctx7.arc(x7, y7, ballRadius, 0, Math.PI * 2);
    ctx7.fillStyle = "#333333";
    ctx7.fill();
    ctx7.closePath();
}

//----------------------------------------------------------------------
//Ball8
var ctx8 = canvas.getContext("2d");
var x8 = canvas.width - 40;
var y8 = canvas.height - 320;
var dx8 = -2;
var dy8 = -2;
//Draw ball and color it
function drawBall8() {
    ctx8.beginPath();
    ctx8.arc(x8, y8, ballRadius, 0, Math.PI * 2);
    ctx8.fillStyle = "#333333";
    ctx8.fill();
    ctx8.closePath();
}

//----------------------------------------------------------------------
//Ship
// Basic variables for position and movement
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var firePressed = false;
var shipHeight = 25;
var shipWidth = 25;
var shipX = (canvas.width - shipWidth) / 2;
var shipY = (canvas.height - shipHeight) / 2;
var square = canvas.getContext("2d");

//Event listeners for when certain key is pressed
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/*
 * Initialization of basic movement and firing for computer
 * Uses up, down, left, right, and spacebar
 */

//When a key is pressed
function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
    else if (e.keyCode == 38) {
        upPressed = true;
    }
    else if (e.keyCode == 40) {
        downPressed = true;
    }
}

//When key is not pressed anymore
function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
    else if (e.keyCode == 38) {
        upPressed = false;
    }
    else if (e.keyCode == 40) {
        downPressed = false;
    }
}

/*
 * Basic movement and firing for mobile devices
 * Uses buttons on the screen
 */
//Left button
function leftOn() {
    leftPressed = true;
}
function leftOff() {
    leftPressed = false;
}
//Right button
function rightOn() {
    rightPressed = true;
}
function rightOff() {
    rightPressed = false;
}

//Up button
function upOn() {
    upPressed = true;
}
function upOff() {
    upPressed = false;
}

//Down button
function downOn() {
    downPressed = true;
}
function downOff() {
    downPressed = false;
}
//Draws the ship
function drawShip() {
    square.beginPath();
    square.rect(shipX, shipY, shipWidth, shipHeight);
    square.fillStyle = "#FF9933";
    square.fill();
    square.closePath();
}

//----------------------------------------------------------------------
//Goal
//Basic variables for position and movement
var gx = canvas.width / 6;
var gy = canvas.height / 2;
var gdx = 2;
var gdy = -2;
var gRadius = 10;
var goal = canvas.getContext("2d");

function drawGoal() {
    goal.beginPath();
    goal.arc(gx, gy, gRadius, 0, Math.PI * 2);
    goal.fillStyle = "#00FF00";
    goal.fill();
    goal.closePath();
    goal.status = 1;
}

function drawText() {
    var texts = canvas.getContext("2d");
    texts.font = "12px Arial";
    texts.fillText("Health: " + health, 10, 15);
    texts.fillText("Points: " + points, 250, 15);
}

function drawEnd(){
    var endText = canvas.getContext("2d");
    endText.font = "22px Arial";
    endText.fillText("Game Over",90,150);
}

function draw() {
    goal.clearRect(0, 0, canvas.width, canvas.height);
    drawGoal();
    drawShip();
    drawText();
    drawBall();
    drawBall2();
    drawBall3();
    drawBall4();
    drawBall5();
    drawBall6();
    drawBall7();
    drawBall8();
    collisionDetection();


    //Ship movement
    if (rightPressed && shipX < canvas.width - shipWidth) {
        shipX += 7;
    }
    else if (leftPressed && shipX > 0) {
        shipX -= 7;
    }
    else if (downPressed && shipY < canvas.height - shipWidth) {
        shipY += 7;
    }
    else if (upPressed && shipY > 0) {
        shipY -= 7;
    }

    x += dx;
    y += dy;
    gx += gdx;
    gy += gdy;
    x2 += dx2;
    y2 += dy2;
    x3 += dx3;
    y3 += dy3;
    x4 += dx4;
    y4 += dy4;
    x5 += dx5;
    y5 += dy5;
    x6 += dx6;
    y6 += dy6;
    x7 += dx7;
    y7 += dy7;
    x8 += dx8;
    y8 += dy8;
}
setInterval(draw, 10);
//----------------------------------------------------------------------
//Collision detection
function collisionDetection() {
    //Goal collision with wall
    if (gx + gdx > canvas.width - gRadius || gx + gdx < gRadius) {
        gdx = -gdx;
    }
    if (gy + gdy > canvas.height - gRadius || gy + gdy < gRadius) {
        gdy = -gdy;
    }

    //Ball collision with wall
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    if (x2 + dx2 > canvas.width - ballRadius || x2 + dx2 < ballRadius) {
        dx2 = -dx2;
    }
    if (y2 + dy2 > canvas.height - ballRadius || y2 + dy2 < ballRadius) {
        dy2 = -dy2;
    }
    
    if (x3 + dx3 > canvas.width - ballRadius || x3 + dx3 < ballRadius) {
        dx3 = -dx3;
    }
    if (y3 + dy3 > canvas.height - ballRadius || y3 + dy3 < ballRadius) {
        dy3 = -dy3;
    }
    
    if (x4 + dx4 > canvas.width - ballRadius || x4 + dx4 < ballRadius) {
        dx4 = -dx4;
    }
    if (y4 + dy4 > canvas.height - ballRadius || y4 + dy4 < ballRadius) {
        dy4 = -dy4;
    }
    
    if (x5 + dx5 > canvas.width - ballRadius || x5 + dx5 < ballRadius) {
        dx5 = -dx5;
    }
    if (y5 + dy5 > canvas.height - ballRadius || y5 + dy5 < ballRadius) {
        dy5 = -dy5;
    }
    
    if (x6 + dx6 > canvas.width - ballRadius || x6 + dx6 < ballRadius) {
        dx6 = -dx6;
    }
    if (y6 + dy6 > canvas.height - ballRadius || y6 + dy6 < ballRadius) {
        dy6 = -dy6;
    }
    
    if (x7 + dx7 > canvas.width - ballRadius || x7 + dx7 < ballRadius) {
        dx7 = -dx7;
    }
    if (y7 + dy7 > canvas.height - ballRadius || y7 + dy7 < ballRadius) {
        dy7 = -dy7;
    }
    
    if (x8 + dx8 > canvas.width - ballRadius || x8 + dx8 < ballRadius) {
        dx8 = -dx8;
    }
    if (y8 + dy8 > canvas.height - ballRadius || y8 + dy8 < ballRadius) {
        dy8 = -dy8;
    }

    //Ball collision with ship
    if (x > shipX && x < shipX + shipWidth && y > shipY && y < shipY + shipHeight) {
        dy = -dy;
        points += 10;
        health -= 10;
    }
    if (x2 > shipX && x2 < shipX + shipWidth && y2 > shipY && y2 < shipY + shipHeight) {
        dy2 = -dy2;
        points += 10;
        health -= 10;
    }
    if (x3 > shipX && x3 < shipX + shipWidth && y3 > shipY && y3 < shipY + shipHeight) {
        dy3 = -dy3;
        points += 10;
        health -= 10;
    }
    if (x4 > shipX && x4 < shipX + shipWidth && y4 > shipY && y4 < shipY + shipHeight) {
        dy4 = -dy4;
        points += 10;
        health -= 10;
    }
    if (x5 > shipX && x5 < shipX + shipWidth && y5 > shipY && y5 < shipY + shipHeight) {
        dy5 = -dy5;
        points += 10;
        health -= 10;
    }
    if (x6 > shipX && x6 < shipX + shipWidth && y6 > shipY && y6 < shipY + shipHeight) {
        dy6 = -dy6;
        points += 10;
        health -= 10;
    }
    if (x7 > shipX && x7 < shipX + shipWidth && y7 > shipY && y7 < shipY + shipHeight) {
        dy7 = -dy7;
        points += 10;
        health -= 10;
    }
    if (x8 > shipX && x8 < shipX + shipWidth && y8 > shipY && y8 < shipY + shipHeight) {
        dy8 = -dy8;
        points += 10;
        health -= 10;
    }
    //Goal collision with ship
    if (gx > shipX && gx < shipX + shipWidth && gy > shipY && gy < shipY + shipHeight) {
        gdy = -gdy;
        health += 20;
    }

    //
    if ((points % 1000) == 0 && points != 0) {
        health += 100;
    }
    if (health <= 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawEnd();
    }
}

function start(){
    goal.clearRect(0, 0, canvas.width, canvas.height);
    var sText = canvas.getContext("2d");
    sText.font = "22px Arial";
    for (i = 3; i >= 0; i--){
       sText.fillText("Starting..." + i,90,150);
       setTimeout(1000);
    }
}

//----------------------------------------------------------------------
//Game loop
var health = 300;
var points = 0;
function initialization() {
    start();
    draw();
}