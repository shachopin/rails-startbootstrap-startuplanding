/*----
  Name of your program!
  Programmed by You!
  Documentation!
  ----*/

//Globals
var keysDown = []; //Map of which keys are being pressed

//Constants
var CANVAS_WIDTH = 400;
var CANVAS_HEIGHT = 400
var FRAMERATE = 30;
var W = 87;
var A = 65;
var S = 83;
var D = 68;

//Classes

//Functions

void keyPressed()
{
   keysDown[keyCode] = true;
};

void keyReleased()
{
   keysDown[keyCode] = false;
};


void mousePressed(){
   
};

void mouseReleased() {
   
};




size(CANVAS_WIDTH, CANVAS_HEIGHT);
frameRate(FRAMERATE);
   


void setup()
{	
   
background(173, 236, 255);
stroke(28, 84, 0);
fill(55, 166, 0);
// body
triangle(100, 410, 200, 200, 300, 410);

// face
stroke(145, 104, 0);
fill(250, 212, 147);
ellipse(200, 180, 191, 200);

// hands
ellipse(100, 300, 42, 42);
ellipse(300, 300, 42, 42);

// mouth
stroke(255, 0, 0);
line(183, 246, 245, 230);

// glasses frames
stroke(0, 0, 0);
line(107, 163, 292, 163);

// glasses lenses
fill(0, 0, 0);
rect(132, 152, 50, 38);
rect(215, 152, 50, 38);



};

   
void draw()
{
   
};


