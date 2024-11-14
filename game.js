function setup() {
  createCanvas(600, 500);
  noStroke();
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
  fill(20, 20, 20);
  rect(0, 400, 700, 200);
}

function winScreen() {
  background(0, 200, 200);

  //Text
  fill(255, 255, 0);
  textSize(40);
  text("You won!", 215, 250);

  //Background button
  fill(0, 160, 160);
  rect(210, 300, 180, 65, 10);

  //Text on button
  fill(255, 255, 0);
  textSize(30);
  text("Play again", 230, 340);
}

function loseScreen() {
  background(200, 0, 0);

  //Background button
  fill(255, 255, 0);
  rect(240, 300, 180, 65, 10);

  //Text on buttons
  fill(110, 0, 0);
  textSize(40);
  text("You lost, try again!", 170, 250);
  textSize(30);
  text("Restart", 280, 345);
}

function draw() {
  startScreen();
}
