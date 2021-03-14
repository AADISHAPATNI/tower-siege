const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine
var world
var  ground
var block
var stand1, stand2;
var slingshot;
var holder, ball
var ball
var polygon_Img,

function preload(){
  polygon_img = loadImage(polygon.png);
}




function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  World = engine.world;
  Engine = run(engine);
  ground = new Ground();
  stand1 = new Stand(390,393,258,101);
  stand2  = new Stand(700,700,300,101);

  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(368,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(455,275,30,40);
  block7 = new Block(485,275,30,40);

  
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10= new Block(390,235,30,40);
  block11= new Block(420,235,30,40);
  block12= new Block(450,235,30,40);

  block13= new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  
}
function draw(){

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
block8.display();
fill("pink");
block9.display();
fill("gold");
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();


ImageMode(CENTER);
Image(polygon-img, ball.position.x,ball.position.y,40,40);

  background(255,255,255);  
  drawSprites();
 
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,mouseY});
}

function MouseReleased(){
  slingShot.fly();
}

}