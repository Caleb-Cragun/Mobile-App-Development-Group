var canvas = document.getElementById("myCanvas");
//----------------------------------------------------------------------

//Globals :D
BALL_RADIUS = 30;
BALL_COUNT = 7;
var ctx = canvas.getContext("2d");
balls = {};

//Ball class
function ball(x, y, dx, dy, color, healing) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    //Default parameter
    if (healing === undefined) {
        healing = false;
    }
    this.healing = healing;
    this.r = BALL_RADIUS;
    if (healing) {
            this.sprite = new sprite("green-sheet.png", 15, 15, 10, 10, true);
    } else {
        this.sprite = new sprite("red-sheet.png", 15, 15, 4, 8, true);
    }
}

function makeBalls() {
    balls[0] = new ball(
            rand(0, canvas.width),  //x
            rand(0, canvas.height), //y
            rand(-2, 2),            //dx
            rand(-2, 2),            //dy
            "#00FF00",
            true
            );
    
    for (i = 1; i <= (BALL_COUNT); i++) {
    balls[i] = new ball(
            rand(0, canvas.width),  //x
            rand(0, canvas.height), //y
            rand(-2, 2),            //dx
            rand(-2, 2),            //dy
            "#333333"
            );
}

}

//Draw ball and color it
function drawBall(ball) {
    ball.sprite.update();
    ball.sprite.render(ctx, ball.x, ball.y, ball.r, ball.r);
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
var s1 = false;
var s2 = false;
var s3 = false;
var s4 = false;
var s5 = false;

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
    else if (e.keyCode == 83){
        s1 = true;
    }else if (e.keyCode == 65){
        s2 = true;
    }else if (e.keyCode == 76){
        s3 = true;
    }else if (e.keyCode == 84){
        s4 = true;
    }else if (e.keyCode == 89){
        s5 = true;
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
    }else if (e.keyCode == 83){
        s1 = false;
    }else if (e.keyCode == 65){
        s2 = false;
    }else if (e.keyCode == 76){
        s3 = false;
    }else if (e.keyCode == 84){
        s4 = false;
    }else if (e.keyCode == 89){
        s5 = false;
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
    square.fillStyle = "#271F27";
    square.fill();
    square.closePath();
}

//----------------------------------------------------------------------
function drawText() {
    var texts = canvas.getContext("2d");
    texts.font = "12px Arial";
    texts.fillText("Health: " + health, 10, 15);
    texts.fillText("Points: " + points, 250, 15);
}

function drawEnd(){
    var end = localStorage.getItem("Score");
     if (end >= points){
        document.getElementById("messageArea").innerHTML = "Game Over High Score: " + end;
    }else{
        localStorage.setItem("Score",points);
        document.getElementById("messageArea").innerHTML = "Game Over New High Score:" + points;     
    }
    document.getElementById("myCanvas").style.transform = null;
    ctx.restore();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawShip();
    drawText();
    for (i = 0; i <= (BALL_COUNT); i++) {
        drawBall(balls[i]);
    }
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
    else if (s1 && s2 && s3 && s4 && s5){
        
    }

    //Ball movement
    for (var i = 0; i <= BALL_COUNT; i++) {
        balls[i].x += balls[i].dx;
        balls[i].y += balls[i].dy;
    }
}

//----------------------------------------------------------------------
//Collision detection
function collisionDetection() {
    //set transition times
     document.getElementById("myCanvas").style.transition = "all 10s";
    
    //Ball collision with wall
    for (i = 0; i < (BALL_COUNT); i++) {
        if (balls[i].x + balls[i].dx > canvas.width - balls[i].r || balls[i].x + balls[i].dx < balls[i].r) {
            balls[i].dx = -balls[i].dx;
        }
        if (balls[i].y + balls[i].dy > canvas.width - balls[i].r || balls[i].y + balls[i].dy < balls[i].r) {
            balls[i].dy = -balls[i].dy;
        }
    }

    //Ball collision with ship
    for (i = 0; i < (BALL_COUNT); i++) {
        if (balls[i].x > shipX && balls[i].x < shipX + shipWidth && balls[i].y > shipY && balls[i].y < shipY + shipHeight) {
            balls[i].dy = -balls[i].dy;
            if (!balls[i].healing) {
                points += 20;
                health -= 10;
            } else {
                health += 20;
            }
        }
    }
    
    if (health <= 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawEnd();
    }
    if (points <= 250 && points > 150){
         document.getElementById("myCanvas").style.transform = "rotateX(180deg)";
    }
    else if (points <= 500 && points > 260){
         document.getElementById("myCanvas").style.transform = "rotateY(180deg)";
    }
    else if (points <= 1000 && points > 550) {
         document.getElementById("myCanvas").style.transform = "rotateZ(180deg)";
    } 
}

function rand(min, max) {
    do {
        var number = Math.floor(Math.random() * (max - min + 1) + min);
    } while (!number)
    return number;
}

function sprite(image, width, height, frames, delay, repeat) {
                //Member variables
                spriteImage = new Image();
                spriteImage.src = image;
                this.image = spriteImage;   //Image for sprite
                
                this.width = width;         //Width of sprite
                this.height = height;       //Height of sprite
                this.sx = 0;                //Sprite sheet source x
                this.sy = 0;                //Sprite sheet source y
                this.frameIndex = 0;        //Which frame of animation to play
                this.tickCount = 0;         //How many updates since animation began
                this.frames = frames;       //Number of frames in animation
                if (delay === undefined) { delay = 0; }         //Default delay
                this.ticksPerFrame = delay; //Slow down animation
                if (repeat === undefined) {repeat = false; }    //Default repeat
                this.repeat = repeat;       //The animation should repeat?

                    //Methods
                    this.render = function (ctx, dx, dy, dwidth, dheight) {
                        if (dwidth === undefined) { dwidth = this.width; }      //Default
                        if (dheight === undefined) { dheight = this.height; }   //Default
                        
                        // Draw the animation
                        ctx.drawImage(
                                this.image,
                                this.frameIndex * this.width, //Source x on the sprite sheet
                                0,              //Source y on the sprite sheet
                                this.width,     //Width of sprite
                                this.height,    //Height of sprite
                                dx,             //Destination on canvas
                                dy,             //Destination on canvas
                                dwidth,         //Width on canvcas
                                dheight);       //Height on canvas
                    };
                    this.update = function () {
                        this.tickCount += 1;

                        if (this.tickCount > this.ticksPerFrame) {
                            this.tickCount = 0;
                            // Go to the next frame
                            this.frameIndex++;
                            if (this.frameIndex >= frames) {
                                if (this.repeat) {
                                    //Restart animation loop
                                    this.frameIndex = 0;
                                } else {
                                    delete this;
                                }
                            }
                        }
                    };
                }

function start(healthA,pointsB){
    ctx.save();
    document.getElementById("messageArea").innerHTML = "Begin";
    this.health = healthA;
    this.points = pointsB;
}   

//----------------------------------------------------------------------
//Game loop
setInterval(draw, 15);
var health;
var points;
makeBalls();


function initialization(message) {
    document.getElementById("messageArea").innerHTML = message;
}