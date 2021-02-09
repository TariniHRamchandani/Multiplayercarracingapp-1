var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1;
var car2;
var car3;
var car4,cars;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  //increase the canvas to fit the screen
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
