var xPos = 112;
var yPos = 112;
var sW = 10;
var sH = 10;
var Pp = 0;
var AP = 8;

noStroke();

draw = function() {
    background(133, 196, 245);
    fill(235, 61, 38);
    ellipse(xPos, yPos, sW, sH);
    
    sW +=1.5;
    sH +=1.5;
    image(getImage( "creatures/BabyWinston"),Pp,300);
    Pp +=1.3;
    fill(245, 237, 237);
    textSize(AP);
    AP +=0.1;
    text("Calculus HW", 50, 123);
};