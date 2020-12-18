const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,580,50,50);
    pig1 = new Pig(1000,580)
    box2 = new Box(1100,580,50,50);
    log1 = new Log(1000,560,250,PI/2)

    box3 = new Box(900,510,50,50);
    pig2 = new Pig(1000,510)
    box4 = new Box(1100,510,50,50);
    log2 = new Log(1000,490,250,PI/2)

    box5 = new Box(1000,440,50,50)
    log3 = new Log(950,400,100,PI/8)
    log4 = new Log(1050,400,100,-PI/8)
    
    bird1 = new Bird(600,300,20,20)
   

  

    ground = new Ground(600,height,1400,20)
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird1.display();
}