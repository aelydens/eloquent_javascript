// Looping a triangle

for (var string = "#"; string.length < 8; string += "#") {
	console.log(string);
}


// FizzBuzz

for (var number = 1; number <= 100; number++) {
  string = "";
  if (number % 5 === 0) string += "Fizz";
  if (number % 3 === 0) string += "Buzz";
  if (string.length === 0) string = number;
  console.log(string);
}

// Chess Board

size = 10;
string = "";
for (row = 0; row <= size-1; row++) {
  for (column = 0; column <= size-1; column++) {
  	if ((column + row) % 2 === 0) {
  		string += " ";
  	} else {
  		string += "#";
  	}
  }
  string += "\n";
}

console.log(string);
