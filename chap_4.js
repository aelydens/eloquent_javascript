// Question 1: Sum of A Range
// ____________________________
//Original range function

function range(start, end) {
  array = [];
  if (start < end) {
    for (i = start; i <= end; i++) {
      array.push(i);
    }
  } else {
    for (i = start; i >= end; i--) {
      array.push(i);
    }
  }
  return array;
}

//Range function with step

function range(start, end, step) {
  array = [];
  if (start < end) {
    if (arguments.length < 3) {
      step = 1;
    }
    for (i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    	if (arguments.length < 3) {
      		step = -1;
    	}
      for (i = start; i >= end; i += step) {
        array.push(i);
      }
    }
  return array;
}

// Sum with for..in

function sum(array) {
  total = 0;
  for (var i in array) {
  	total += array[i];
  }
  return total;
}

// Sum rewritten with forEach

function sum(array) {
  total = 0;
  array.forEach(function(element) {
  	total += element;
  });
  return total;
}


console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]


// Question 2: Reversing an Array
// ____________________________

function reverseArray(array) {
  newarray = [];
  for (var i = array.length - 1; i >= 0; i--) {
  	newarray.push(array[i]);
  }
  return newarray;
}

function reverseArrayInPlace(arrayValue) {
  halfLen = Math.floor(arrayValue.length / 2);
  for (i = 0; i < halfLen; i++) {
  	mirror = arrayValue[i];
    arrayValue[i] = arrayValue[arrayValue.length - 1 - i];
    arrayValue[arrayValue.length - 1 - i] = mirror;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


// Question 3: Reversing an Array
// ____________________________

function arrayToList(array) {
  list = null;
  for (i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function prepend(element, list) {
  newlist = { value: element, rest: list };
  return newlist;
}


var array = [];
function listToArray(list) {
  array.push(list.value);
  if (list.rest === null) {
    return array;
  } else {
    listToArray(list.rest);
  }
  return array;
}

function nth(list, number) {
  var arr = listToArray(list);
  return arr[number];
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

// Question 4: Recursive Deep Equal
// ____________________________

var deepEqual = function(obj, obj2) {

    var objectCheck = function(object) {
        return typeof object === "object" && object !== null;
    };

    if (objectCheck(obj) && objectCheck(obj2)) {

        if (Object.keys(obj).length !== Object.keys(obj2).length) {
          return false;
        }

        for (var prop in obj) {
            if (obj.hasOwnProperty(prop) && obj2.hasOwnProperty(prop)) {
                return deepEqual(obj[prop], obj2[prop]);
            } else {
              return false;
            }
        }

        return true;

    } else {
      return obj === obj2;
    }
};

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
