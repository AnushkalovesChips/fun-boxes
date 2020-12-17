const World= Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;



var world, engine,object,box1,box2;

function setup() {
  engine= Engine.create();
  world= engine.world;
 
  createCanvas(400,400);

  var op={

    isStatic:true,
    mass:4
  }


  object= Bodies.rectangle(200,390,400,20,op);
  World.add(world,object);


  box1= new Box(200,300,50,50);
  box2=new Box(220,100,50,50);

  
 

  
}

function draw() {
  Engine.update(engine);
  background(0);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,400,20);
  box1.display();
  box2.display();
}