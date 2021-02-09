class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
    cars=[car1,car2,car3,car4];
  }

  play(){
    form.hide();
    //textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var index=0;
      //we create a variable named index and store the cars array in this variable.
      var x=0;
      //var x=variable that stores cars x value
      var y=0;
      //var y=varible that stores cars y value
      for(var plr in allPlayers){
        //for loop
        index=index+1;
        //index=0;
        x=x+200;
        //the first car will be at 200;
        //second=400;
        //third=600;
        //fourth=800;
        y=displayHeight-allPlayers[plr].distance;
        //we have 400=we move to the upwards the value will be 300(if we move upwards by 100);
        cars[index-1].x=x;
        //we give the x and y values to the cars
        cars[index-1].y=y;
        if(index===player.index){
          //we are comparing the index of the car to match with the player index.
          cars[index-1].shapeColor="blue";
          camera.position.x=displayWidth/2;
          //we are positioning the game camera at the centre of the canvas.
          camera.position.y=y;
          //we are positioning as the car.
        }else{
          cars[index-1].shapeColor="yellow";
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    drawSprites();
  }
}
