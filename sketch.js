var helicopterIMG, helicopterSprite, packageSprite,packageIMG, package_options;
var packageBody,ground ,rightwall, leftwall, bottomwall,rightwallBody, rightwallSprite, leftwallBody, leftwallSprite, bottomwallBody, bottomwallSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	rightwallSprite=createSprite(500,620,20,100);
	rightwallSprite.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	rightwallBody=Bodies.rectangle(rightwallSprite.x, rightwallSprite.y,20,100);
	World.add(world,rightwallBody)

	leftwallSprite=createSprite(300,620,20,100);
	leftwallSprite.shapeColor=color("red");

	leftwallBody= Bodies.rectangle(leftwallSprite.x, leftwallSprite.y,20,100)
	World.add(world,leftwallBody)

	bottomwallSprite=createSprite(400,660,200,20);
	bottomwallSprite.shapeColor=color("red");

	bottomwallBody= Bodies.rectangle(bottomwallSprite.x, bottomwallSprite.y,200, 20)
	World.add(world, bottomwallBody)

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);

   ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground); Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
    Matter.Body.setStatic(packageBody,false);
  }
}



