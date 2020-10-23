const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var ground
var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight=300

function setup() {
  createCanvas(480, 800);



	engine = Engine.create();
	world = engine.world;

	ground = new Ground(43,795,width*2,10);

	//Create the Bodies Here.


	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  if(frameCount%60===0){
	particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}

for (var m = 0; m< particles.length; m++){
	particles[m].display();
}


  for (var k = 0; k<=width; k = k + 80){
	divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}

	for (var k = 0; k < divisions.length; k++){
		divisions[k].display();
	}
  

	for (var j = 40; j <=width; j=j+50){
		plinkos.push(new Plinko(j,75,10));
	}

	for (var j = 15; j <=width-10; j=j+50){
		plinkos.push(new Plinko(j,175,10));
	}

	for (var j = 40; j <=width; j=j+50){
		plinkos.push(new Plinko(j,275,10));
	}

	for (var j = 15; j <=width-10; j=j+50){
		plinkos.push(new Plinko(j,375,10));
	}

	for (var j = 0; j < plinkos.length; j++){
		plinkos[j].display();
	}
  
  drawSprites();
}




