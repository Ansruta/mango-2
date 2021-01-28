
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  s=new stone(260,440,20);
  sl=new sling(s,{x:260,y:435})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  console.log(mouseX);
  console.log(mouseY);

  treeObj.display();
  mango1.display();
s.display();
sl.display();

  groundObject.display();
}
function mouseDragged(){
  Matter.Body.setPosition(s.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}