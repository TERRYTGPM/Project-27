
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var string1, string2, string3, string4, string5;
var roofhoof;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(300, 300, 50);
	bobObject2 = new Bob(350, 300, 50);
	bobObject3 = new Bob(400, 300, 50);
	bobObject4 = new Bob(450, 300, 50);
	bobObject5 = new Bob(500, 300, 50);
	
	roofhoof = new Roof(400, 50, 800, 10);
	
	string1 = new String(bobObject1.body, roofhoof.body, -50 * 2, 0);
	string2 = new String(bobObject2.body, roofhoof.body, -25 *2 , 0);
	string3 = new String(bobObject3.body, roofhoof.body, 0 * 2, 0);
	string4 = new String(bobObject4.body, roofhoof.body, 25 * 2, 0);
	string5 = new String(bobObject5.body, roofhoof.body, 50 * 2, 0);






	Engine.run(engine);
  
}


function draw() {
rectMode(CENTER);
ellipseMode(CENTER);
background(100);
roofhoof.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
string1.display();
string2.display();
string3.display();
string4.display();
string5.display();

oscillate();  
drawSprites();
 
}
function oscillate(){
	if (keyDown(UP_ARROW)){

		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-5,y:0});

	} 
}
