function movable(x, y, direction, speed) {
  this.x = x;
  this.y = y;
  this.direction = direction;
  this.speed = speed;
  this.rotation = 0;
  this.dead = false;
 
  this.move = move;
  function move() {
    var d = this.next();
    this.x += d[0];
    this.y += d[1];
  }

  this.next = next;
  function next() {
    var norm = Math.sqrt(this.direction[0]*this.direction[0] + this.direction[1]*this.direction[1]);
    if (norm == 0) return [0, 0];
    var dx = speed * this.direction[0] / norm;
    var dy = speed * this.direction[1] / norm;
    return [dx, dy];
  }

  this.align = align;
  function align() {
    this.rotation = rotation(this.direction[0], this.direction[1]);
  }
}


