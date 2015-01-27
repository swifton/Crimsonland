var gLoop,
	c = document.getElementById('c'),
	ctx = c.getContext('2d');
	
var fieldH = 17, fieldW = 37, radius = 20;
width = fieldW * 2 * radius;
height = fieldH * 2 * radius;
c.width = width;
c.height = height;

//Draw functions

var clear = function(cnv){
	cc = cnv.getContext('2d');
	cc.fillStyle = '#d3d3d3';
	cc.clearRect(0, 0, cnv.width, cnv.height);
	cc.beginPath();
	cc.rect(0, 0, cnv.width, cnv.height);
	cc.closePath();
	cc.fill();
}

var drawTile = function(x, y, im){
	var img=new Image();
	var str = "images/";
	img.src= str.concat(im);
	ctx.drawImage(img, x - radius, y - radius); 
}

function drawImage(x, y, source, angle) {
	ctx.save();
	ctx.translate(x - radius, y - radius); 
	ctx.rotate(angle);
	var img = new Image();
	img.src = "images/" + source + ".png";
	ctx.drawImage(img, -radius, -radius); 
	ctx.restore();
}

function draw() {
  drawImage(player.x, player.y, 'ladybird', player.rotation);

  for (i in bullets) {
    drawImage(bullets[i].x, bullets[i].y, 'bullet', bullets[i].rotation);
  }

  for (i in bots) {
    var hor = bots[i].direction[0];
    var vert = bots[i].direction[1];
    bots[i].rotation = rotation(hor, vert);
    drawImage(bots[i].x, bots[i].y, 'bug', bots[i].rotation);
  }
}

function rotation(hor, vert) {
  var norm = Math.sqrt(hor * hor + vert * vert);
  if (norm == 0) return;
  alpha = Math.asin(vert / norm);
  return (hor > 0 ? alpha: Math.PI - alpha);
}

function rotatePlayer() {
  var hor = mouse.x - player.x + radius;
  var vert = mouse.y - player.y + radius;
  player.rotation =  rotation(hor, vert);
}

function fire(x, y) {
  var hor = mouse.x - player.x + radius;
  var vert = mouse.y - player.y + radius;
  bullet = new movable(player.x, player.y, [hor, vert], 100);
  bullet.rotation =  rotation(hor, vert);
  bullets.push(bullet);
}

function move() {
  player.move(); 
  for (i in bullets) {
    bullets[i].move();    
  } 
  for (i in bots) {
    bots[i].direction[0] = player.x - bots[i].x;
    bots[i].direction[1] = player.y - bots[i].y;
    bots[i].align();
    bots[i].move();    
  } 
  for (i in bullets) {
    if (bullets[i].x > 2000 || bullets[i].x < -2000 || bullets[i].y > 2000 || bullets[i].y < -2000) bullets.splice(i, 1);
  } 
  
  var buldel = [];
  var botdel = [];

  for (i in bullets) {
    for (j in bots) {
      if (hit(bullets[i], bots[j])) {
	console.log('!');
        bullets[i].dead = true;
        bots[j].dead = true;
      }
    }
  } 
}

function die() {
  for (i in bullets) {
    if (bullets[i].dead) bullets.splice(i, 1);
  }

  for (i in bots) {
    if (bots[i].dead) bots.splice(i, 1);
  }
}

// Initialization functions

function pauseGame() {
  if (!gamePaused) {
    gLoop = clearTimeout(gLoop);
    gamePaused = true;
  } else if (gamePaused) {
    gLoop = setTimeout(GameLoop, 1000 / 4);
    gamePaused = false;
  }
}

function createBots() {
  for (i = 0; i < 10; i++) {
    bot = new movable(Math.floor(Math.random()*width), Math.floor(Math.random()*height), [-1, -1], 2); 
    bots.push(bot);
  }
}

function hit(bul, target) {
  var bx = bul.x;
  var by = bul.y;
  var tx = target.x;
  var ty = target.y;
  var d = bul.next();
  var dx = bx + d[0];
  var dy = by + d[1];
  var alpha = ((tx - dx)*(bx - dx) + (ty - dy)*(by - dy)) / ((bx - dx) * (bx - dx) + (by - dy) * (by - dy));
  var xx = tx - alpha * bx - (1 - alpha) * dx;
  var yy = ty - alpha * by - (1 - alpha) * dy;
  return (Math.sqrt(xx*xx + yy*yy) < radius) && (alpha < 1) && (alpha > 0);
}

var gamePaused = false;

var player = new movable(500, 500, [0, 0], 3);
var bullets = [];
var bots = [];
createBots();

var GameLoop = function(){
	clear(c);
	rotatePlayer();
	draw();
	move();
	die();
	gLoop = setTimeout(GameLoop, 1000 / 100);
}

GameLoop();
