// Question 1: Minimum
var min = function(a, b) {
  if (a > b) {
    return b;
  } else {
  	return a;
  }
};


console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Question 2: Recursive isEven function

function isEven(number) {
  if (number === 0) {
  	return true;
  } else if (number === 1) {
  	return false;
  } else {
    return isEven(number - 2);
  };
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false

// Question 3: Bean Counting

function countBs(string) {
  return countChar(string, "B");
}

function countChar(string, char) {
	count = 0;
	for (i = 0; i < string.length; i++) {
    	if (string.charAt(i) === char) {
    	count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
