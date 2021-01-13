const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Body = Matter.Body;

var engine, world;
var paper, ground;
var box1, box2, box3;

function setup()
{
  var canvas=createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
  paper = new Paper(200,450, 70);
  ground = new Ground(width/2,670,width,20);
  box1 = new dustbin(1200,650);
  var render = Render.create({
    element:document.body,
    engine:engine,
    options:
    {
      width:1600,
      height:700,
      wireframes:false
    }
  })
 Engine.run(engine);
 Render.run(render);
}
function draw()
{
  rectMode(CENTER);
  background(230);
  paper.display();
  ground.display();
  box1.display();
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
  }
}