let circleX = 100;
let circleY = 100;
let spot;

function setup() {
        createCanvas (windowWidth, windowHeight);
        background (0);
}
function draw () {
    background (0);

    fill ("white");
    noStroke();
    circle (mouseX, mouseY, 50);

    stroke ("black");
    noFill();
    circle (circleX, circleY, 50);

    if (mouseX > circleX - 25 &&  mouseX < circleX + 25)  {
        if (mouseY > circleY - 25 &&  mouseY < circleY + 25) {
            circleX = random(0, width);
            circleY = random(0,height);
           
        }
    }

    Image(spot, mouseX, mouseY, 200, 200);
}