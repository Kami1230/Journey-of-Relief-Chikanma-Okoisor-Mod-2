//Move the catcher with the left and right arrow keys to catch the falling objects. 

/* VARIABLES */
let catcher, fallingObject;
let score = 0, element;
let instructions;
let fontRegular1;
let fontRegular2;
let bucket, plate, hospital;
let raindrops, food, medicine;
let bgImg1, bgImg2, bgImg3, bgImg4, bgImg5;
let song, pause, play, pauseImg, playImg;
let currentLevel = 0;

/* PRELOAD LOADS FILES */
function preload(){
  fontRegular1 = loadFont("assets/Alice.ttf");
  fontRegular2 = loadFont("assets/Aborito.ttf");
  
  bucket = loadImage("assets/bucket.png");
  plate = loadImage("assets/Plate.png");
  hospital = loadImage("assets/Hospital.png");
  
  raindrops = loadImage("assets/raindrops.png");
  food = loadImage("assets/Food.png");
  medicine = loadImage("assets/Medicine.png");
  
  bgImg1 = loadImage("assets/Ethiopia.svg");
  bgImg2 = loadImage("assets/Nigeria.png");
  bgImg3 = loadImage("assets/Congo.png");
  bgImg4 = loadImage("assets/Flags.png")
  bgImg5 = loadImage("assets/dead.jpeg");
  
  pauseImg = loadImage("assets/Pause.png");
  playImg = loadImage("assets/Play.png");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(720,550);
  background(0,225,225);
  fill('#FFFFFF');
  textFont(fontRegular1);
  song = loadSound('assets/Home.mp4');
  textSize(13);
  
  //Create rain stuff
  enterButton = new Sprite(width /2, height/2 + 150);
  bgImg1.resize(700,0);
  bgImg2.resize(700,0);
  bgImg3.resize(700,0);
  bgImg4.resize(700,0);
  
  bucket.resize(100,0);
  plate.resize(150,0);
  hospital.resize(150,0);
  
  raindrops.resize(50,0);
  food.resize(75,0);
  medicine.resize(75, 0);
  
  pauseImg.resize(75,0);
  playImg.resize(75,0);

  pause = new Sprite(pauseImg, -50, 50, 10, 0);
  play = new Sprite(playImg, 50, 50, 10, 0);
  
  pause.collider = "none";
  play.collider = "none";
  
   //Create falling object
  fallingObject = new Sprite(raindrops, -100, 0, 10, 0);
  fallingObject.vel.y = 2;

  //Create catcher 
  catcher = new Sprite(bucket, -200,350,100,20);
  catcher.collider = "kinematic";
}

/* DRAW LOOP REPEATS */
function draw() {
  background(0, 225, 225);
  if (currentLevel === 0) {
    screen0();
  } else if (currentLevel === 1) {
    level1();
  } else if (currentLevel === 2) {
    level2();
  } else if (currentLevel === 3) {
    level3();
  } else{
    createCanvas(720,550);
    winScreen();
  }
}

function screen0(){
  background('#3f3f3f');
  image(bgImg4, 0, 0);
  tint(255, 128);
  
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = 'k';
  enterButton.text = "Enter";
  enterButton.color = 'teal';
  
  textFont(fontRegular2);
  textSize(20); 
  text("Welcome to Journey of Relief: Africa's Trials and Triumphs!", 40, height/2 - 50);
  textFont(fontRegular1);
  textSize(15); 
  text("Learn about Trials and Triumphs of different African \nCountries by moving the catcher to catch the falling element.\n \n                   Click enter to begin your test of heart!", 200, height/2);
}

function level1(){
  image(bgImg1, 0, 0);
  instructions = "Move the bucket with\n the left and right \n arrow keys to catch 10 \ngallons of water to \n save Ethiopia from \ndroughts and floods.";
  
  // Draw directions to screen
  text("Gallons: " + score, width-100, 330);
  Play();
  
  if (score >= 5){
    score = 0;
    currentLevel = 2;
    level2();
   }
}

function level2(){
  image(bgImg2, 0, 0);
  
  // Draw directions to screen
  instructions = "Move the plate with \nthe left and right arrow \nkeys to catch 10 plates \nof food to save Nigeria \nfrom hunger.";  
  
  //Create falling Obj
  fallingObject.image = food;
  
  // Create catcher 
  catcher.image = plate;

  Play();
  text("Plates: " + score, width-100, 330);

  if (score >= 6){
    score = 0;
    currentLevel = 3;
    level3();
  }
}

function level3(){
  image(bgImg3, 0, 0);
  
  // Draw directions to screen
  instructions = "Move the hospital \nwith the left and \nright arrow keys to \ncatch 10 batches of \nmedicine to save \nCongo from disease.";
  
  //Create falling Obj
  fallingObject.image = medicine;

  //Create catcher 
  catcher.image = hospital;
  catcher.y = 300;

  Play();
  text("Medicines: " + score, width-100, 330);
  
  if (score >= 6){
    createCanvas(720,550);
    winScreen();
  }
}

function winScreen(){
  background('#3f3f3f');
  image(bgImg4, 0, 0);
  tint(255, 128);
  catcher.x = -300;
  catcher.y = -300;    
  fallingObject.y = -100;
  fallingObject.y = -100;
  fill(2, 173, 171);
  textFont(fontRegular2);
  textSize(17); 
  text("You have saved the people of Ethiopia, Nigeria and Democratic Republic \n                                                    of the Congo from death!!!", 0, 30);
  fill(2, 173, 133);
  text("Fun Facts about African Countries!", 200, 75);
  textFont(fontRegular1);
  textSize(14);
  fill('#FFFFFF');
  text("1.) BOTSWANA: Known for its stable political environment and prudent economic management, Botswana has \nexperienced consistent economic growth and has effectively managed its diamond resources for development. \nIt has invested in education, healthcare, and infrastructure, leading to a higher standard of living compared to many other African nations.\n \n2.) MAURITIOUS: This island nation has transformed itself into a successful financial hub and a diverse economy \ndriven by tourism, textiles, and services. It has invested in education, healthcare, and innovation, resulting in a high \nhuman development index and a relatively high standard of living.\n \n3.) RWANDA: Following the tragic genocide in 1994, Rwanda has made remarkable progress in rebuilding and \nrevitalizing its economy and society. The country has embraced technology, sustainable development, and \ntourism, resulting in impressive economic growth and social development.\n \n4.) GHANA: Recognized for its stable democracy, Ghana has experienced sustained economic growth and has \nbecome a major exporter of gold, cocoa, and oil. The country has focused on education, healthcare, and \ninfrastructure development, contributing to its positive economic trajectory.\n \n5.) KENYA: A leader in technology innovation, Kenya has pioneered mobile money systems like M-Pesa and has a \nthriving tech startup ecosystem. Its strong agricultural sector, tourism, and services have contributed to \nits economic success.\n \n6.) MOROCCO: With a diverse economy spanning agriculture, mining, manufacturing, and tourism, Morocco has \ninvested in infrastructure and renewable energy projects, positioning itself as a regional economic hub.\n \n7.) NIGERIA: Despite challenges, Nigeria possesses a large and diverse economy with a robust oil sector, \nagriculture, and a rapidly growing telecommunications industry. Its entrepreneurial spirit and potential for \ntechnological growth contribute to its economic significance.", 0, 90);
}

function Play(){
  //If falling objects moves to the bottom, move back to a random position at the top of the screen.
  
  text(instructions, width-150, 30);
  
  if (fallingObject.y >= height){
    score = score - 1;
    fallingObject.y = 0;
    fallingObject.x = random(width);
    fallingObject.vel.y = random(1, 5);
  }

  if (kb.pressing("left")){
    catcher.vel.x = -4;
  }
  else if(kb.pressing("right")){
    catcher.vel.x = 4;
  }
  else {
    catcher.speed = 0;
  }

  if (catcher.x > 700){
    catcher.x = 700;
  }
  else if (catcher.x < 50){
    catcher.x = 50;
  }
  fallingObject.x = constrain(fallingObject.x, 50, 700);

  //If fallingObject collides with catcher, move back to random position at top.
  if (fallingObject.collides(catcher)){
    score = score + 1;  
    fallingObject.y = 0;
    fallingObject.x = random(width);
    fallingObject.vel.y = random(1, 5);
  }

  if (score < 0){
    bgImg5.resize(1000, 0);
    image(bgImg5, 0, 0);
    catcher.x = -300;
    catcher.y = -300;
    fallingObject.y = -100;
    fallingObject.y = -100;
    fill('#FFFFFF');
    textFont(fontRegular2);
    textSize(20);
    text("The people are dead!!!", width/2 - 130, height/2);
    textFont(fontRegular1);
    textSize(14);
    text("Click Run to regain your people trust", width/2 - 120, height/2 + 20);
  }
}

function mousePressed() {
  if (currentLevel === 0){
    currentLevel = 1;
    noTint();
    createCanvas(700, 350);
    enterButton.x = -5000;
    level1();
  }
  if (song.isPlaying()) {
    song.stop();
    pause.x = -40;
    play.x = 40;
  } else {
    song.play();
    pause.x = 40;
    play.x = -40;
  }
}