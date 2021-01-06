
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var boy ,boyimage
var tree,stone,boy,ground,mango,mango1, mango2,mango3,mango4,mango5,mango6,sling
function preload()
{

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
   tree=new Tree(900,400,300,500);
   stone=new Stone(280,500,50,50);
   boy=new Boy(200,500,300,300);
   ground=new Ground(600,680,1200,10);
   mango=new Mango(950,350,50,50);
   mango1=new Mango(1000,400,50,50);
   mango2=new Mango(800,300,50,50);
   mango3=new Mango(850,350,50,50);
   mango4=new Mango(950,200,50,50);
   mango5=new Mango(900,250,50,50);
   mango6=new Mango(1000,280,50,50); 
   sling=new Sling(stone.body,{x:280,y:300});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  ground.display();
  stone.display();
  boy.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  sling.display();
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	sling.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  sling.attach(stone.body);
	}
  }



