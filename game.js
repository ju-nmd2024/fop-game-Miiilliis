let ironmanX = 2000;
let ironmanY = 200;
let s = 0.15;
let gameState = "start";
let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 300; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

function setup() {
  createCanvas(600, 500);
  noStroke();
}

function ironman(x, y, s) {
  //Head
  noStroke();
  fill(255, 0, 0);
  quad(
    (x - 80) * s,
    (y - 140) * s,
    (x + 50) * s,
    (y - 140) * s,
    (x + 30) * s,
    (y - 50) * s,
    (x - 50) * s,
    (y - 50) * s
  );
  arc((x - 15) * s, (y - 140) * s, 130 * s, 60 * s, PI, 0);
  arc((x - 10) * s, (y - 50) * s, 80 * s, 40 * s, 0, PI);
  fill(255, 230, 0);
  quad(
    (x - 60) * s,
    (y - 140) * s,
    (x + 30) * s,
    (y - 140) * s,
    (x + 15) * s,
    (y - 50) * s,
    (x - 35) * s,
    (y - 50) * s
  );
  fill(255, 0, 0);
  rect((x - 25) * s, (y - 145) * s, 25 * s, 30 * s, 5 * s);

  //Left ear
  rect((x - 75) * s, (y - 115) * s, 20 * s, 30 * s, 5 * s);

  //Right ear
  rect((x + 30) * s, (y - 115) * s, 20 * s, 30 * s, 5 * s);

  //Neck
  rect((x - 35) * s, (y - 40) * s, 50 * s, 40 * s);

  //Neck shadow
  strokeWeight(5);
  stroke(150, 0, 0);
  noFill();
  arc((x - 10) * s, (y - 35) * s, 50 * s, 5 * s, 0, PI);

  //Left lower arm
  noStroke();
  fill(255, 0, 0);
  ellipse((x - 140) * s, (y + 200) * s, 60 * s, 210 * s);

  //Right lower arm
  ellipse((x + 120) * s, (y + 200) * s, 60 * s, 210 * s);

  //Left lower arm shadow
  fill(150, 0, 0);
  ellipse((x - 125) * s, (y + 190) * s, 40 * s, 170 * s);

  //Right lower arm shadow
  ellipse((x + 105) * s, (y + 190) * s, 40 * s, 170 * s);

  //Left upper arm
  fill(255, 230, 0);
  ellipse((x - 130) * s, (y + 100) * s, 60 * s, 200 * s);

  //Right upper arm
  ellipse((x + 110) * s, (y + 100) * s, 60 * s, 200 * s);

  //Shaddow left upper arm
  fill(190, 140, 0);
  ellipse((x - 115) * s, (y + 100) * s, 30 * s, 160 * s);

  //Shadow right upper arm
  ellipse((x + 95) * s, (y + 100) * s, 30 * s, 160 * s);

  //Shoulders
  fill(255, 0, 0);
  rect((x - 150) * s, (y - 20) * s, 280 * s, 55 * s, 10 * s);

  //Left shoulderpad shadow
  fill(150, 0, 0);
  rect((x - 100) * s, (y - 35) * s, 45 * s, 50 * s, 5 * s);

  //Right shoulderpad shadow
  rect((x + 35) * s, (y - 35) * s, 45 * s, 50 * s, 5 * s);

  //Left shoulderpad
  fill(255, 0, 0);
  rect((x - 95) * s, (y - 35) * s, 35 * s, 45 * s, 5 * s);

  //Right shoulderpad
  rect((x + 40) * s, (y - 35) * s, 35 * s, 45 * s, 5 * s);

  //Body
  quad(
    (x - 130) * s,
    (y + 15) * s,
    (x + 110) * s,
    (y + 15) * s,
    (x + 70) * s,
    (y + 200) * s,
    (x - 80) * s,
    (y + 200) * s
  );

  //Shadow of hole in the chest
  fill(150, 0, 0);
  ellipse((x - 10) * s, (y + 50) * s, 50 * s, 50 * s);

  //Shadow on torso
  quad(
    (x + 100) * s,
    (y + 60) * s,
    (x + 70) * s,
    (y + 200) * s,
    (x + 37) * s,
    (y + 200) * s,
    (x + 60) * s,
    (y + 90) * s
  );
  quad(
    (x - 117) * s,
    (y + 60) * s,
    (x - 80) * s,
    (y + 200) * s,
    (x - 49) * s,
    (y + 200) * s,
    (x - 75) * s,
    (y + 90) * s
  );

  //Red highlights on torso
  fill(255, 150, 110);
  rect((x - 60) * s, (y + 100) * s, 105 * s, 20 * s, 2 * s);
  rect((x - 55) * s, (y + 135) * s, 95 * s, 20 * s, 2 * s);
  rect((x - 45) * s, (y + 170) * s, 75 * s, 20 * s, 2 * s);
  rect((x - 90) * s, (y - 35) * s, 25 * s, 40 * s, 2 * s);
  rect((x + 45) * s, (y - 35) * s, 25 * s, 40 * s, 2 * s);

  //Red highlights on head
  rect((x - 20) * s, (y - 150) * s, 15 * s, 30 * s, 2 * s);

  //White highlights on body
  fill(255, 200, 190);
  rect((x - 60) * s, (y + 100) * s, 105 * s, 5 * s, 2 * s);
  rect((x - 55) * s, (y + 135) * s, 95 * s, 5 * s, 2 * s);
  rect((x - 45) * s, (y + 170) * s, 75 * s, 5 * s, 2 * s);
  rect((x - 85) * s, (y - 35) * s, 10 * s, 20 * s, 2 * s);
  rect((x + 55) * s, (y - 35) * s, 10 * s, 20 * s, 2 * s);

  //White highlight on head
  rect((x - 15) * s, (y - 150) * s, 5 * s, 20 * s, 2 * s);

  //Blue hole
  fill(0, 200, 200);
  ellipse((x - 10) * s, (y + 55) * s, 45 * s, 45 * s);

  //Highlight on hole
  fill(0, 255, 255);
  ellipse((x - 10) * s, (y + 60) * s, 35 * s, 25 * s);

  //Left hand
  fill(255, 0, 0);
  arc((x - 185) * s, (y + 305) * s, 100 * s, 50 * s, PI, 0);
  rect((x - 180) * s, (y + 280) * s, 30 * s, 20 * s);

  //Right hand
  arc((x + 170) * s, (y + 305) * s, 100 * s, 50 * s, PI, 0);
  rect((x + 130) * s, (y + 280) * s, 30 * s, 20 * s);

  //Waist
  rect((x - 80) * s, (y + 200) * s, 150 * s, 50 * s);

  //Left upper leg
  fill(255, 230, 0);
  rect((x - 80) * s, (y + 250) * s, 70 * s, 150 * s, 5 * s);

  //Right upper leg
  rect(x * s, (y + 250) * s, 70 * s, 150 * s, 5 * s);

  //Shadow of upper left leg
  fill(190, 140, 0);
  rect((x - 50) * s, (y + 250) * s, 40 * s, 150 * s, 5 * s);

  //Shadow of upper right leg
  rect(x * s, (y + 250) * s, 40 * s, 150 * s, 5 * s);

  //Crotch
  fill(255, 0, 0);
  rect((x - 50) * s, (y + 240) * s, 90 * s, 40 * s, 10 * s);

  //Lower left leg
  quad(
    (x - 80) * s,
    (y + 380) * s,
    (x - 10) * s,
    (y + 395) * s,
    (x - 20) * s,
    (y + 550) * s,
    (x - 80) * s,
    (y + 550) * s
  );

  //Lower right leg
  quad(
    x * s,
    (y + 395) * s,
    (x + 70) * s,
    (y + 380) * s,
    (x + 70) * s,
    (y + 550) * s,
    (x + 10) * s,
    (y + 550) * s
  );

  //Left foot
  rect((x - 130) * s, (y + 540) * s, 110 * s, 50 * s, 10 * s);

  //Right foot
  rect((x + 10) * s, (y + 540) * s, 110 * s, 50 * s, 10 * s);

  //Shadow left foot
  fill(150, 0, 0);
  quad(
    (x - 50) * s,
    (y + 385) * s,
    (x - 10) * s,
    (y + 395) * s,
    (x - 20) * s,
    (y + 590) * s,
    (x - 50) * s,
    (y + 590) * s
  );

  //Shadow right foot
  quad(
    x * s,
    (y + 395) * s,
    (x + 40) * s,
    (y + 385) * s,
    (x + 40) * s,
    (y + 590) * s,
    (x + 10) * s,
    (y + 590) * s
  );

  //Left laser
  fill(0, 200, 200);
  rect((x - 200) * s, (y + 305) * s, 30 * s, 350 * s, 5 * s);
  fill(0, 255, 255);
  rect((x - 190) * s, (y + 305) * s, 10 * s, 350 * s, 5 * s);

  //Right laser
  fill(0, 200, 200);
  rect((x + 160) * s, (y + 305) * s, 30 * s, 350 * s, 5 * s);
  fill(0, 255, 255);
  rect((x + 170) * s, (y + 305) * s, 10 * s, 350 * s, 5 * s);
}

function startScreen() {
  background(255, 0, 0);

  //Red shadow
  fill(180, 0, 0);
  ellipse(300, 240, 420, 430);

  //Shadow blue hole
  fill(0, 200, 200);
  ellipse(300, 250, 400, 400);

  //Highligt blue hole
  fill(0, 255, 255);
  ellipse(300, 260, 350, 350);

  //Background button
  fill(255, 0, 0);
  rect(180, 205, 235, 65, 10);

  //Text on button
  fill(255, 255, 0);
  textSize(40);
  text("Start game", 200, 250);
}

function gameScreen() {
  background(50, 50, 50);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.025;
  }

  fill(20, 20, 20);
  rect(0, 400, 700, 200);
  ironman(ironmanX, ironmanY, s);
}

function winScreen() {
  background(0, 200, 200);

  //Text
  fill(255, 255, 0);
  textSize(40);
  text("You won!", 215, 170);

  //Background button
  fill(0, 160, 160);
  rect(180, 205, 235, 65, 10);

  //Text on button
  fill(255, 255, 0);
  textSize(30);
  text("Play again", 230, 250);
}

function loseScreen() {
  background(200, 0, 0);

  //Background button
  fill(255, 255, 0);
  rect(180, 205, 235, 65, 10);

  //Text on button
  fill(110, 0, 0);
  textSize(40);
  text("You lost, try again!", 145, 170);

  //Text
  textSize(30);
  text("Restart", 245, 250);
}

function draw() {
  if (gameState === "start") {
    startScreen();
  } else if (gameState === "game") {
    gameScreen();
  } else if (gameState === "result") {
    loseScreen();
  } else if (gameState === "won") {
    winScreen();
  }

  //Mouse pressed

  if (mouseIsPressed) {
    if (mouseX > 180 && mouseX <= 415 && mouseY >= 205 && mouseY <= 270) {
      gameState = "game";
    }
  }
}
