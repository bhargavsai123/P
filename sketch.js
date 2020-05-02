
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;

 
var bob,string,base,mConstraint,Mouse;
 
function setup() {
    var canvas = createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    base  = new Ground(200,120,150,20);

    bob = new Pendulum(200,250,30);

    string = new Chain(base.body,bob.body);

    Mouse = Matter.Mouse.create(canvas.elt);

    var options = {
        mouse: Mouse
    }

    mConstraint = Matter.MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
    
}
 
function draw() {

    background(0);

    Engine.update(engine);

    fill(255);

    textSize(30);
    text("Oscillating Pendulum",60,30);

    textSize(12);
    text(mouseX + "," + mouseY ,10, 15);
    textSize(20);
    text("       Drag the bob to \n Oscillate the Pendulum",85,65);

    string.display();

    noStroke();

    base.display();

    fill("grey");
    bob.display();

}

function Pendulum(x, y,r) {


    this.body = Bodies.circle(x,y,r);
    this.r = r;
    World.add(world,this.body);

    this.display = function () {

        var pos = this.body.position;

        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);

    }


}