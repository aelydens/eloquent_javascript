// Question 1: Flattening an array

var arrays = [[1, 2, 3], [4, 5], [6]];

var flatten = function(array) {
  var flattenedArray = array.reduce(function(prev, curr) {
   	return prev.concat(curr);
  });
  return flattenedArray;
};

console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]

// Question 2: Mother-Child Age Difference

// ANCESTRY_FILE can be downloaded from http://eloquentjavascript.net/
var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

filteredAncestry = ancestry.filter(function f(p) { return p.mother !== null; });

var output = [];
var mothers = filteredAncestry.map(function(person) {
  if (byName[person.mother] !== undefined) {
    var ageDiff = person.born - byName[person.mother].born;
	output.push(ageDiff);
  }
});

console.log(average(output));

// Question 3: Historical life difference

var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var assignCentury = function(date) {
	return Math.ceil(date / 100);
};

var lifeExpectancy = function(data) {
  var centuries = {};
  data.forEach(function(element) {
    century = assignCentury(element.died);
    if (!(centuries.hasOwnProperty(century)))
  	  centuries[century] = [];
    centuries[century].push(element.died - element.born);
  });
  return avgAges(centuries);
};

var avgAges = function(object) {
  avg = {};
  for (var prop in object) {
    avg[prop] = average(object[prop]);
  }
  return avg;
};

console.log(lifeExpectancy(ancestry));

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

// Question 4: Every and then some

var every = function(array, test) {
  for(i = 0; i < array.length; i++) {
    if (!test(array[i])) return false;
  }
  return true;
};

var some = function(array, test) {
  for( i = 0; i < array.length; i++) {
  	if (test(array[i])) return true;
  }
  return false;
};

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([4, NaN, NaN], isNaN));
// → false
console.log(some([3, NaN, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
