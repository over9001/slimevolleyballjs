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
            'iconmonstr-check-mark-8-icon', 
            'iconmonstr-paperclip-2-icon',
            'iconmonstr-puzzle-icon',
            'iconmonstr-user-icon'
        ];

// create two boxes and a ground
var player1 = Bodies.rectangle(100, 300, 100, 51
    , {  chamfer: {  radius: [50, 50, 0, 0]}
        , density: 100 });

var player2 = Bodies.rectangle(700, 300, 100, 51
    , {  chamfer: {  radius: [50, 50, 0, 0]}
        , mass: 1 });

var ballA = Bodies.circle(100, 300, 20, { restitution: 0.9 ,  mass: 0.001 });

var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
var fence = Bodies.rectangle(400, 545, 20, 70, { isStatic: true });


// add all of the bodies to the world
World.add(engine.world, ([player1, player2, ballA, fence, ground]));

// run the engine
Engine.run(engine);

// Matter.Body.applyForce ( body  position  force )