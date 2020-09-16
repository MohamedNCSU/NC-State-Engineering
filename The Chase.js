var x = 64;
var y = 339;
var faceSize = 122;
var eyeSize = 0.125 * faceSize;
noStroke();
draw= function() {

// head
background(232, 232, 190);
var earSize=faceSize*0.582;
var earWidth = earSize*1;
fill(250, 248, 247);
ellipse(x-faceSize*0, y-faceSize*0.5, earWidth, earSize);
// body
fill(250, 250, 250);
ellipse(x, y, faceSize, faceSize);
// torso 
fill(245, 150, 35);
ellipse(x-faceSize/153, y-faceSize/85, eyeSize*4.2, eyeSize*4.2);
// eyes
fill(0, 0, 0);
ellipse(x-faceSize/153, y-faceSize/1.5, eyeSize, eyeSize);
ellipse(x+faceSize/7, y-faceSize/1.8, eyeSize/2, eyeSize/2);
image(getImage("avatars/robot_female_1"), x+50, y-100);
x+=3;
};




