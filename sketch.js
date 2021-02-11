const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ballObject1, ballObject2, ballObject3, ballObject4, ballObject5;
var plank, rope1, rope2, rope3, rope4, rope5;

function preload() {}

function setup() {
  createCanvas(800, 650);

  balldiameter = 40;
  engine = Engine.create();
  world = engine.world;


  Engine.run(engine);

  ballObject1 = new Ball(260, 400, 40);
  ballObject2 = new Ball(320, 400, 40);
  ballObject3 = new Ball(380, 400, 40);
  ballObject4 = new Ball(440, 400, 40);
  ballObject5 = new Ball(500, 400, 40);

  plank = new Plank(380, 150, 300, 30);

  rope1 = new Rope(ballObject1.body, plank.body, -balldiameter * 2, 0);
  rope2 = new Rope(ballObject2.body, plank.body, -balldiameter * 1, 0);
  rope3 = new Rope(ballObject3.body, plank.body, 0, 0);
  rope4 = new Rope(ballObject4.body, plank.body, balldiameter * 1, 0);
  rope5 = new Rope(ballObject5.body, plank.body, balldiameter * 2, 0);
}

function draw() {
  rectMode(CENTER);
  background(215);
  ballObject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();
  plank.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ballObject1.body, ballObject1.body.position, {x: -3,y: -32});
  }
}
