
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject, roofObject,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 bobObject1=new Bob(250,200,70);
	 bobObject2=new Bob(50,200,70);
	 bobObject3=new Bob(150,200,70);
	 bobObject4=new Bob(350,200,70);
	 bobObject5=new Bob(450,200,70);
	 roof =new Roof(width/2,50,width,20);
	 rope1 = new Rope(bobObject1.body,roof.body,-100, 0);

	

	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject1.display();
  rope1.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:130,y:-145});

  
	}
}



