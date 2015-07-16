var canvas = document.getElementById("myCanvas");
//----------------------------------------------------------------------

//Globals :D
BALL_RADIUS = 35;
BALL_COUNT = 7;
MAX_COUNT = 80;
MAX_WIDTH = canvas.width;
MAX_HEIGHT = canvas.height;
ctx = canvas.getContext("2d");
balls = {};
bubbles = {};
ship = new ship;

//Bubble class
function bubble() {
    this.x = rand(1, MAX_WIDTH);
    this.dx = rand(-2, 2);
    this.y = rand(-MAX_HEIGHT, 0);
    this.dy = rand(0, 1);
    this.r = rand(6, (MAX_WIDTH / 5));     //Max radius is 1/5 or 20% of the screen width
    this.sprite = new sprite("snowflake.png", 1144, 1188, 1);
};

function ship() {
    this.width = 25;
    this.height = 25;
    this.x = (canvas.width - this.width) / 2;
    this.y = (canvas.height - this.height) / 2;
    this.sprite = new sprite("ship.png", 76, 76, 4);
}

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
    ship.sprite.render(ctx, ship.x, ship.y, ship.width * 1.5, ship.height * 1.5);
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
        window.alert("Game Over \nHigh Score: " + end, 50, 50);
    }else{
        localStorage.setItem("Score",points);
        window.alert("Game Over \nNew High Score:" + points, 50, 50);
        
    }
    window.onclick(location.reload());
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //Bacground snowflakes
    for (var i = 0; i < MAX_COUNT; i++) {
        //Draw bubbles
        drawBubble(ctx, bubbles[i]);
        //Move bubbles
        bubbles[i].x += bubbles[i].dx;
        bubbles[i].y += bubbles[i].dy;
        //Wrap bubbles around screen
        wrap(bubbles[i]);
    }
    
    drawShip();
    drawText();
    for (i = 0; i <= (BALL_COUNT); i++) {
        drawBall(balls[i]);
    }
    collisionDetection();


    //Ship movement
    if (rightPressed && ship.x < canvas.width - ship.width) {
        ship.x += 7;
        ship.sprite.frameIndex = 3;
    }
    else if (leftPressed && ship.x > 0) {
        ship.x -= 7;
        ship.sprite.frameIndex = 1;
    }
    else if (downPressed && ship.y < canvas.height - ship.width) {
        ship.y += 7;
        ship.sprite.frameIndex = 2;
    }
    else if (upPressed && ship.y > 0) {
        ship.y -= 7;
        ship.sprite.frameIndex = 0;
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
        if (balls[i].x > ship.x && balls[i].x < ship.x + ship.width && balls[i].y > ship.y && balls[i].y < ship.y + ship.height) {
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
    if (points % 50 === 0 && points !== 0) {
        if (rand(1, 5) === 5) {
            console.log("event1");
            document.getElementById("myCanvas").style.transform = "rotateX(180deg)";
        }
    }
    if (points % 75 === 0 && points !== 0) {
        console.log("event2");
        if (rand(1, 10) === 10) {
            document.getElementById("myCanvas").style.transform = "rotateY(180deg)";
        }
    }
    if (points % 100 === 0 && points !== 0) {
        if (rand(1, 15) === 15) {
            console.log("event3");
            document.getElementById("myCanvas").style.transform = "rotateZ(180deg)";
        }
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
    window.alert("Begin");
    this.health = healthA;
    this.points = pointsB;
    makeBubbles(bubbles);
}

//----------------------------------------------------------------------
//Game loop
setInterval(draw, 10);
makeBalls();

function initialization() {
    start(300,0);
    draw();
}

function makeBubbles(bubbles) {
    for (var i = 0; i < MAX_COUNT; i++) {
        bubbles[i] = new bubble();
    }
}

function drawBubble(ctx, bubble) {
    bubble.sprite.render(
            ctx,
            bubble.x,
            bubble.y,
            bubble.r,
            bubble.r
            );
}

function wrap(bubble) {
    //Ignore bubbles too far off screen
    if (bubble.x < 100)
        return;
    if (bubble.x < 0)
        bubble.x += (MAX_WIDTH - 1);
    if (bubble.x > MAX_WIDTH)
        bubble.x -= (MAX_WIDTH + 1);
    //Ignore if bubble is above screen
    if (bubble.y > MAX_HEIGHT)
        bubble.y -= (MAX_HEIGHT + 1);
}

