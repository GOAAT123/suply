const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine, world;
var ground;
var ball,ballIMG;
var helicopter, helicopterIMG
var wall1;
var wall2;
var wall3;


function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	ballIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine=Engine.create();
  world=engine.world;
  var ground_options={
  isStatic: true }

  var ball_options={
	restitution: 1.0}

	// wall1=createSprite(width/2, height-45, 200, 10);
	// wall1.shapeColor="red";
	// wall2=createSprite(500, height-70, 10, 80);
	// wall2.shapeColor="red";
	// wall3=createSprite(300, height-70, 10, 80);
	// wall3.shapeColor="red";

	ball=createSprite(width/2, 200, 10,10);
	ball.addImage(ballIMG);
	ball.scale=0.2;

	
	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG);
	helicopter.scale=0.6;

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
  
}


function draw() {
  rectMode(CENTER);
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
//   rect(ground.position.x, ground.position.y, 400, 50);
  drawSprites();
}

if (ball.x - ground.x < ground.width/2 + ball.width/2
    && ground.x - ball.x < ground.width/2 + ball.width/2
    && ball.y - ground.y < ground.height/2 + ball.height/2
	&& ground.y - ball.y < ground.height/2 + ball.height/2){ 
	ball.velocityY=0;
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	ball.velocityY=7;    
  }
}