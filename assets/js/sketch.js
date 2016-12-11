var x = 0;
var y = 0;
var xspeed = 20;
var yspeed = 10;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    var d = random(5, 20);

    fill(random(100, 250), random(100, 250), random(100, 250));
    ellipse(x, y, d, d);

    x = x + xspeed;
    if (x > windowWidth || x < 0) {
        xspeed = -xspeed;
    }

    y = y + yspeed;
    if (y > windowHeight || y < 0) {
        yspeed = -yspeed;
    }

}
