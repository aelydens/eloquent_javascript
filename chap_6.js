// Question 1: A vector type
// __________________________

// refactor:

function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype = {
    plus: function(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    },

    minus: function(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    },

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
};

// first go:

function Vector(x,y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(vector) {
  x = this.x + vector.x;
  y = this.y + vector.y;
  return new Vector(x, y);
};

Vector.prototype.minus = function(vector) {
  x = this.x - vector.x;
  y = this.y - vector.y;
  return new Vector(x, y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() { return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)); }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5


// Question 2: Another cell
// __________________________


// code from the book to get examples running

function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

// my code:

function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};

StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);

console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]


// Question 3: Another cell
// __________________________

function ArraySeq(array){
    this.array = array;
  	this.position = 0;
}

ArraySeq.prototype = {
  get current(){
     return this.array[this.position];
  },

	get end(){
     return this.current === undefined;
  },

  move: function() {
  	return this.array[this.position += 1];
  },
};

function RangeSeq(from, to){
 var array = [];
  for(var i = from; i <= to; i++) {
  	array.push(i);
  }
  return new ArraySeq(array);
}

RangeSeq.prototype = Object.create(ArraySeq.prototype);

console.log(new RangeSeq(1, 10));

console.log(new ArraySeq([0,1,2,3]));

function logFive(obj){
  for(var i = 0; i < 5; i++) {
    if (!obj.end) {
    	console.log(obj.current);
   		obj.move();
    }
  }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
