function downKeyDown() {player.direction[1] = 1;}
function upKeyDown() {player.direction[1] = -1;}
function leftKeyDown() {player.direction[0] = -1;}
function rightKeyDown() {player.direction[0] = 1;}

function downKeyUp() {if (player.direction[1] == 1) player.direction[1] = 0;}
function upKeyUp() {if (player.direction[1] == -1) player.direction[1] = 0;}
function leftKeyUp() {if (player.direction[0] == -1) player.direction[0] = 0;}
function rightKeyUp() {if (player.direction[0] == 1) player.direction[0] = 0;}

function mouseClick(x, y) {
  fire(x, y);
}
