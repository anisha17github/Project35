var balloon,balloonImage1,balloonImage2;
var position, database;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {

  database=firebase.database();

  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 

  var balloon1 = database.ref('balloon/height')
    balloon1.on("value", read)
}

// function to display UI
function draw() {

  background(bg);


  if(position!==undefined){



  if(keyDown(LEFT_ARROW)){
    changePosition(-10,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in left direction
   
  }
  else if(keyDown(RIGHT_ARROW)){
    changePosition(10,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in right direction
   
  }
  else if(keyDown(UP_ARROW)){
    changePosition(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in up direction
    
  }
  else if(keyDown(DOWN_ARROW)){
    changePosition(0,+10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //write code to move air balloon in down direction
   
  }
}

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function changePosition(a,b){
  database.ref('balloon/height').set({
      x:position.x + a, 
      y:position.y + b
  })

}

function read(data){
  position = data.val()
  balloon.x = position.x
  balloon.y = position.y
}
 
