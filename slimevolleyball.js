//Thanks to keypress.js!
var listener = new window.keypress.Listener();
//Thanks to matter.js!
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Vertices = Matter.Vertices,
    Svg = Matter.Svg,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Body = Matter.Body;


// create a Matter.js engine
var engine = Engine.create(document.body);

var svgs = [
           // 'iconmonstr-check-mark-8-icon', 
          //  'iconmonstr-paperclip-2-icon'
        ];

// create two slimes, a net, a ball, and the ground
var player1 = Bodies.rectangle(100, 300, 100, 51
    , {  chamfer: {  radius: [50, 50, 0, 0]}
        , density: 100 });

var player2 = Bodies.rectangle(700, 300, 100, 51
    , {  chamfer: {  radius: [50, 50, 0, 0]}
        , density: 100 });

var ballA = Bodies.circle(100, 300, 20, { restitution: 0.9 ,  mass: 0.001 });

var net = Bodies.rectangle(400, 545, 20, 70, { isStatic: true });

var ground = Bodies.rectangle(400, 610, 100010, 60, { isStatic: true });

// Add a frame so we don't lose the ball

var frameLeft = Bodies.rectangle(0, 0, 10, 10000, {isStatic: true }); 
var frameRight = Bodies.rectangle(800, 0, 10, 10000, {isStatic: true }); 

// add all of the bodies to the world
World.add(engine.world, ([player1, player2, ballA, net, ground, frameLeft, frameRight]));

// run the engine
Engine.run(engine);

// Keyboard interaction

// more balls
listener.simple_combo("space", function() {
    console.log("You pressed space");
    World.add(engine.world, ([Bodies.circle(100, 300, 20, { restitution: 0.9 ,  mass: 0.001 }) ]));
});

// player one

listener.simple_combo("shift s", function() {
    console.log("You pressed shift and s");
    Matter.Body.applyForce(player1, {x:0,y:0}, {x:0,y:100000});
});

listener.simple_combo("s", function() {
    console.log("You pressed s");
     Matter.Body.applyForce(player1, {x:0,y:0}, {x:0,y:4000});
});

listener.simple_combo("d", function() {
    console.log("You pressed d");
    Matter.Body.applyForce(player1, {x:0,y:0}, {x:2500,y:0});
});

listener.simple_combo("a", function() {
    console.log("You pressed a");
    Matter.Body.applyForce(player1, {x:0,y:0}, {x:-2500,y:0});
});

listener.simple_combo("w", function() {
    console.log("You pressed w");
    Matter.Body.applyForce(player1, {x:0,y:0}, {x:0,y:-10000});
});


// player2
listener.simple_combo("shift down", function() {
    console.log("You pressed shift and down");
    Matter.Body.applyForce(player2, {x:0,y:0}, {x:0,y:100000});
});

listener.simple_combo("down", function() {
    console.log("You pressed down");
     Matter.Body.applyForce(player2, {x:0,y:0}, {x:0,y:4000});
});

listener.simple_combo("right", function() {
    console.log("You pressed right");
    Matter.Body.applyForce(player2, {x:0,y:0}, {x:2500,y:0});
});

listener.simple_combo("left", function() {
    console.log("You pressed left");
    Matter.Body.applyForce(player2, {x:0,y:0}, {x:-2500,y:0});
});

listener.simple_combo("up", function() {
    console.log("You pressed up");
    Matter.Body.applyForce(player2, {x:0,y:0}, {x:0,y:-10000});
});