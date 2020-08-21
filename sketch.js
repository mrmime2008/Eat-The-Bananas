var player, player_image, ground, ground_image, ground_2, invisible_ground;

var banana_image, rock_image;

var banana_group, rock_group;

var score;

var WOW;

var PLAY;

var END;

var gameState;

function preload() {
  player_image = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  banana_image = loadImage("banana.png");

  rock_image = loadImage("stone.png");

  ground_image = loadImage("ground.jpg");
  
}

function setup() {
  createCanvas(400, 400);

  player = createSprite(70, 220, 20, 20);
  player.addAnimation("monkey", player_image);
  player.scale = 0.15
  //         I didn't put a jungle, because it looks really weird. The jungle image already had a monkey and some bananas in it. It looked really strange as a background. I'm just gonna put my own ground. Going to get the image from the internet
  ground = createSprite(200, 380, 400, 50);
  ground.addImage("ground", ground_image);
  ground.scale = 0.5;
  ground.depth = player.depth;
  player.depth = player.depth + 2;
  ground.x = ground.width / 5;
  ground.velocityX = -5;
  invisible_ground = createSprite(200,280,400,10);
  invisible_ground.visible = false;
  
  banana_group = new Group();
  rock_group = new Group();
  
  score = 0
  
  PLAY = 1;
  
  END = 0;
  
  WOW = 2;
  
  gameState = PLAY;
  
  
}

function draw() {
  background(220);
  
  stroke ("black");
  textSize(25);
  
  if(gameState === PLAY) {
    if (ground.x < 0) {
      ground.x = ground.width / 5;
    }

    if(keyDown("space") && player.y > 219.999999999){
      player.velocityY = -14;
    }

    player.velocityY = player.velocityY + 0.5

    player.collide(invisible_ground)

    spawnBananas();

    spawnRocks();

    if(banana_group.isTouching(player)){
      banana_group.destroyEach();
      score = score + 2;
    }

    if(rock_group.isTouching(player)){
      rock_group.destroyEach();
      score = score - 2;
    }
    
    
  }
  
  
  
  drawSprites();
  text("Score: "+ score, 50,70);
  if(gameState === END){
    text("Game Over! Your Score Is Too Low!",10,200);
    textSize(18);
    ground.velocityX = 0;
    banana_group.setVelocityXEach(0);
    rock_group.setVelocityXEach(0);
    banana_group.setLifetimeEach(-1);
    rock_group.setLifetimeEach(-1);
    player.velocityY = 0;
  }
  
  if(gameState === WOW){
    text("Time To Stop Playing. Go Outside!",2,200);
    text("You've Been Playing For Ages!",15,240);
    textSize(18);
    ground.velocityX = 0;
    banana_group.setVelocityXEach(0);
    rock_group.setVelocityXEach(0);
    banana_group.setLifetimeEach(-1);
    rock_group.setLifetimeEach(-1);
    player.velocityY = 0;
  }
  
  switch(score){
    case -90: gameState = END;
      break;
    case -80: player.scale = -0.07;
      break;
    case -70: player.scale = -0.08;  
      break;
    case -60: player.scale = -0.09; 
      break;
    case -50: player.scale = -0.10;
      break;
    case -40: player.scale = -0.11;
      break;
    case -30: player.scale = 0.12;
      break;
    case -20: player.scale = 0.13;
      break;
    case -10: player.scale = 0.14;
      break;
    case 0: player.scale = 0.15;
      break;
    case 10: player.scale = 0.16;
      break;
    case 20: player.scale = 0.17;
      break;
    case 30: player.scale = 0.18;
      break;
    case 40: player.scale = 0.19;
      break;
    case 50: player.scale = 0.20;
      break;
    case 60: player.scale = 0.21;
      break;
    case 70: player.scale = 0.22;
      break;
    case 80: player.scale = 0.23;
      break;
    case 90: player.scale = 0.24;
      break;
    case 100: player.scale = 0.25;
      break;
    case 110: player.scale = 0.26;
      break;
    case 120: player.scale = 0.27;
      break;
    case 130: gameState = WOW;
      break;
    default: break;
  }
  
  
}


function spawnBananas() {
  if (frameCount % 85 === 0) {
    banana = createSprite(400, 200, 20, 20);
    banana.addImage(banana_image);
    banana.y = Math.round(random(100, 150));
    banana.velocityX = -4;
    banana.depth = player.depth - 1;
    banana.scale = 0.04;
    banana_group.add(banana);
  }



}

function spawnRocks() {
  if (frameCount%85 === 0) {
    rock = createSprite(400,260,20,20);
    rock.addImage(rock_image);
    rock.velocityX = -4;
    rock.depth = banana.depth;
    rock.scale = 0.1;
    rock_group.add(rock);
    
  } 







}




