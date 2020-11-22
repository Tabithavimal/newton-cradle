
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var cradle;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

cradle= new Cradle(450,100,500,80)
rope1= new Rope(650,337,5,395)
ball1= new Ball(650,550,90,90)
rope2= new Rope(550,330,5,385)
ball2= new Ball(550,550,90,90)
rope3= new Rope(450,363,5,450)
ball3= new Ball(450,550,90,90)
rope4= new Rope(350,355,5,450)
ball4= new Ball(350,550,90,90)
rope5= new Rope(250,350,5,450)
ball5= new Ball(250,550,90,90)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 cradle.display();
 rope1.display();
 ball1.display();
 rope2.display();
 ball2.display();
 rope3.display();
 ball3.display();
 rope4.display();
 ball4.display();
 rope5.display();
 ball5.display();

}

function keyPressed() 
{ if (keyCode === UP_ARROW)
	 { Matter.Body.applyForce(ball1.body, ball1.body.position,
		
		{x:-50,y:-45}); } 
	
	}

