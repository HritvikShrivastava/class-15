var line1

var line2

var line3

var line4

var line5

var line6

var line7

var line8

var btn

var player

var secretLine9

var obstacles

var gameState = "stop";

function setup () {
line1 = createSprite(105, 180, 40, 1)

line2 = createSprite(105, 220, 40, 1)

line3 = createSprite(85, 200, 1, 40)

line4 = createSprite(125, 160, 1, 40)

line5 = createSprite(125, 240, 1, 40)

line6 = createSprite(200, 140, 150, 1)

line7 = createSprite(200, 260, 150, 1)

line8 = createSprite(275, 200, 1, 120)



player = createSprite (105, 200, 7, 7)

secretLine9 = createSprite(125, 200, 1, 40)
secretLine9.visible = false

}

function draw() {

drawSprites ()


if (gameState === "stop") {

textSize(20)
text ("WORLD'S HARDEST GAME", 70, 70)
textSize(10)
text ("PRESS 'PLAY' TO CONTINUE", 125, 90)
btn = createButton("PLAY")
btn.position(165, 110)
}



else if (gameState === "play") {

  if (keyPressed("left")) {
    player.VelocityX = -10
  }

}  
}

function btn () {
  gameState = "play"
}
