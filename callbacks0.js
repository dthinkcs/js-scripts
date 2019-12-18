// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
	return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

 console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!
forEach([1,2,3], ele=>console.log(ele));

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  const result = [];
	forEach(array, ele=>result.push(ele));
  return result;
}

console.log(mapWith([1, 2, 3], addTwo));



//Extension 2
function reduce(array, callback, initialValue) {
	var accumulatedValue = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulatedValue = callback(accumulatedValue, array[i]);
  }
  return accumulatedValue;
  
}
console.log(reduce([4, 1, 3], (a, b) => a + b, 0));

//Extension 3
function intersection(arrays) {
	return reduce(arrays, function intersect(arrayA, arrayB) {
    const result = [];
    for (let i = 0; i < arrayA.length; i++) {
      for (let j = 0; j < arrayB.length; j++) {
        if (arrayA[i] == arrayB[j]) {
          result.push(arrayA[i]);
          break;
        }
      }
    }
    return result;
  }, arrays[0]);
}

console.log(intersection([[5, 10, 15, 20], [15, 5, 30, 20], [1, 2, 3, 4, 5, 15, 8]]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
  return reduce(arrays, function unionTwo(arrayA, arrayB) {
    const result = [];
    const arrA = [...arrayA]; // assume remove duplicates also
    const arrB = [...arrayB];
    for (let i = 0; i < arrA.length; i++) {
      result.push(arrA[i]);
      for (let j = 0; j < arrB.length; j++) {
        if (arrA[i] == arrB[j]) {
          arrB[j] = undefined;
        }
      }
    }
    for (let i = 0; i < arrB.length; i++) {
      if (arrB[i] != undefined) {
        result.push(arrB[i]);
      }
    }
    return result;
  }, arrays[0])
}

console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  const result = {};
  for (let i = 0; i < array1.length; i++) {
    if ( callback(array1[i]) == array2[i] ) {
      result[array1[i]] = array2[i];
    }
  }
  return result;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  const result = {};
  for (let val of arrVals) {
    result[val] = [];
    for (let fn of arrCallbacks) {
      result[val].push(fn(val));
    }
  }
  return result;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//Extension 7
function objectFilter(obj, callback) {
  const result = {};
  for (var key in obj) {
    if (callback(key) == obj[key])  {
      result[key] = key;
    }
  }
  return result;
}

const cities = {
London: 'LONDON',
LA: 'Los Angeles',
Paris: 'PARIS',
};
//
console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

