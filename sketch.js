var bgImg, plrImg, obs1, obs2, obs3, obs4;
var ob1, ob2, ob3, ob4;
var plr, bg;
var ground;
var win, over;
var player, o1, o2, o3, o4;
var score;

function preload() {

  bgImg = loadImage("images/bg1.jpg");
  plrImg = loadAnimation("images/p1.png", "images/p2.png");
  obs1 = loadImage("images/obstacle_1.png");
  obs2 = loadImage("images/obstacle_2.png");
  obs3 = loadImage("images/obstacle_3.png");
  obs4 = loadImage("images/obstacle_4.png");

}

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 90);

  plr = createSprite(200, 475, 50, 50);
  plr.addAnimation("pikachu", plrImg);
  plr.scale = 0.5;
  ob1 = createSprite(displayWidth + 40, 350, 50, 50);
  ob1.addImage(obs1);
  ob2 = createSprite(displayWidth + 60, 350, 50, 50);
  ob2.addImage(obs2);
  ob3 = createSprite(displayWidth + 200, 350, 50, 50);
  ob3.addImage(obs3);
  ob4 = createSprite(displayWidth + 200, 350, 50, 50);
  ob4.addImage(obs4);

  ground = createSprite(displayWidth/2, 523, displayWidth, 5);
  ground.visible = false;

  score = 0;

  }

function draw() {
  background(bgImg);

  if(keyDown("up") && plr.y > 472) {
    plr.velocityY = -12;
  }

  plr.velocityY = plr.velocityY + 0.4;

  plr.collide(ground);
  plr.setCollider("rectangle", 0, 0, plr.width, plr.height);
  //plr.debug = true;

  drawSprites();
}