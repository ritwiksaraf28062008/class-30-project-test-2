const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function setup() {
  createCanvas(1200, 400);

  engine = Engine.create();
	world = engine.world;

  paper = new Paper(150,200,15);
	dustbin = new Dustbin(800,355,50,50);
	dustbin2 = new Dustbin(850,355,50,50);
  dustbin3 = new Dustbin(900,355,50,50);
  dustbin4 = new Dustbin(950,355,50,50);
  dustbin5 = new Dustbin(1000,355,50,50);
  dustbin6 = new Dustbin(1050,355,50,50);
  dustbin7 = new Dustbin(1100,355,50,50);
  dustbin8 = new Dustbin(1150,355,50,50);
  dustbin9 = new Dustbin(825,305,50,50);
  dustbin10 = new Dustbin(875,305,50,50);
  dustbin11 = new Dustbin(925,305,50,50);
  dustbin12 = new Dustbin(975,305,50,50);
  dustbin13 = new Dustbin(1025,305,50,50);
  dustbin14 = new Dustbin(1075,305,50,50);
  dustbin15 = new Dustbin(1125,305,50,50);
  dustbin16 = new Dustbin(850,255,50,50);
  dustbin17 = new Dustbin(900,255,50,50);
  dustbin18 = new Dustbin(950,255,50,50);
  dustbin19 = new Dustbin(1000,255,50,50);
  dustbin20 = new Dustbin(1050,255,50,50);
  dustbin21 = new Dustbin(1100,255,50,50);
  dustbin22 = new Dustbin(875,205,50,50);
  dustbin23 = new Dustbin(925,205,50,50);
  dustbin24 = new Dustbin(975,205,50,50);
  dustbin25 = new Dustbin(1025,205,50,50);
  dustbin26 = new Dustbin(1075,205,50,50);
  dustbin27 = new Dustbin(900,155,50,50);
  dustbin28 = new Dustbin(950,155,50,50);
  dustbin29 = new Dustbin(1000,155,50,50);
  dustbin30 = new Dustbin(1050,155,50,50);
  
  
  
  
	ground = Bodies.rectangle(600,390,1200,20,{isStatic : true});

	slingshot = new SlingShot(paper.body,{x:185, y:220});

	World.add(world,ground)

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  background(20,30,40);

  rect(600,390,1200,20);
	
  
  paper.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  dustbin4.display();
  slingshot.display();  
  dustbin5.display();
  dustbin6.display();
  dustbin7.display();
  dustbin8.display();
  dustbin9.display();
  dustbin10.display();
  dustbin11.display();
  dustbin12.display();
  dustbin13.display();
  dustbin14.display();
  dustbin15.display();
  dustbin16.display();
  dustbin17.display();
  dustbin18.display();
  dustbin19.display();
  dustbin20.display();
  dustbin21.display();
  dustbin22.display();
  dustbin23.display();
  dustbin24.display();
  dustbin25.display();
  dustbin26.display();
  dustbin27.display();
  dustbin28.display();
  dustbin29.display();
  dustbin30.display();
  
 
 // console.log(paper.body.position);

  drawSprites();
 
}



function mouseDragged(){
        Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
    }



function mouseReleased(){
	slingshot.fly();
     }
     
     function keyPressed(){
      if(keyCode === 32 && paper.body.speed<1){
          Matter.Body.setPosition(paper.body,{x : 200 , y : 50})
         slingshot.attach(paper.body);
              }
  }