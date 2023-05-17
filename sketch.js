//Motor 
const Engine = Matter.Engine;
//Mundo
const World = Matter.World;
//Corpos
const Bodies = Matter.Bodies;
//Corpo
const Body = Matter.Body;



//variaveis
var motor;
var world;

var solo, parado;

var helice;
var botao;
function setup() {
    createCanvas(600, 400);

    //ETAPA 1: Configurar o motor de física
    //criar o motor
    motor = Engine.create();
    mundo = motor.world;

    bola_options = {
      isStatic:false
    }

    bola = Bodies.circle(300,100, 30, bola_options);
    World.add(mundo, bola);

   

    ellipseMode(RADIUS)
    rectMode(CENTER);
}

var angulo = 0;
function draw() {
  background("cyan");
    
  //atualizar o motor
  Engine.update(motor);


  //faz a bolinha
  fill("blue");
  ellipse(bola.position.x, bola.position.y, 30);
}
