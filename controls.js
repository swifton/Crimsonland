function make(a, b) {
  
}

function doKeyDown(e) {
	if (gamePaused == true) {return;}
	var i = e.keyCode;
	//console.log(i);
	if (i == 37 || i == 65){ // left
		player.direction[0] = -1;
	}
	if (i == 39 || i == 68){ // right
		player.direction[0] = 1;
	}
	if (i == 38 || i == 87){ // up
		player.direction[1] = -1;
	}
	if (i == 40 || i == 83){ // down
		player.direction[1] = 1;
	}
}

function doKeyUp(e) {
	if (gamePaused == true) {return;}
	var i = e.keyCode;
	//console.log(i);
	if (i == 37 || i == 65){
		if (player.direction[0] == -1) player.direction[0] = 0;
	}
	if (i == 39 || i == 68){
		if (player.direction[0] == 1) player.direction[0] = 0;
	}
	if (i == 38 || i == 87){
		if (player.direction[1] == -1) player.direction[1] = 0;
	}
	if (i == 40 || i == 83){
		if (player.direction[1] == 1) player.direction[1] = 0;
	}
}

function mousedown(e) {
  var rect = c.getBoundingClientRect();
  mouse.x = e.clientX - rect.left; 
  mouse.y = e.clientY - rect.top;

  fire(mouse.x, mouse.y);
}

window.addEventListener( "keydown", doKeyDown, true);
window.addEventListener( "keyup", doKeyUp, true);

var mouse = {x: 0, y: 0};

c.addEventListener('mousemove', function(e){ 
    var rect = c.getBoundingClientRect();
    mouse.x = e.clientX - rect.left; 
    mouse.y = e.clientY - rect.top;
}, false);

c.addEventListener('mousedown', mousedown, false);


















