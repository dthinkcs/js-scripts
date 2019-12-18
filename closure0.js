// PART 0 
function instructionGenerator() {
    function multiplyBy2(num) { // simple declaration just like any other data type
        return num * 2;
    }
    return multiplyBy2;
}

let generatedFunction = instructionGenerator();
console.log(generatedFunction(10));
console.log()

// PART 1.1
function outer() {
    let counter = 0;
    function incrementCounter() {
        counter++;
    }
    incrementCounter();
}

outer();

// incrementCounter(); // wont work

// PART 1.2 since outhas been popped out then its done(look at the call stack) 
function funcGenerator() {
    let counter = 0; // NB: counter now becomes like private access specifier in java coz you can only have getters and setters inside of the function
    function incrementCounter() {
        counter++;
        console.log(counter);
    }
    return incrementCounter;
}

let myNewFunction = funcGenerator(); let func2 = myNewFunction;
myNewFunction(); // oh oh you can't find counter in the local and then the global...huh we did not get an error
// BUT BEFORE THAN YOU LOOK IN THE orange box/Bagack 1st before looking at global...Bagpack==LexicalScopeGenerator
myNewFunction();
let anotherFunction = func2; //funcGenerator();// myNewFunction;  // IMP funcGenerator makes a new func
anotherFunction();



// PART MY 
function getterFuncGenerator() {
    let counter = 0;
    return function () {
        return counter;
    }   
}

function setterFuncGenerator() {
    let counter = 0;
    return function(newValue) {
        counter = newValue;
        console.log(counter) 
    }
}


let func1 = setterFuncGenerator();
func1(10);
console.log();console.log();console.log();console.log();

function Counter(initialValue=0) {
    let counter = initialValue;
    return {
        getCounter: function () { // getter   COVE->ClosedOverVariableEnvironment
            return counter;
        },
        setCounter: function (newValue) { // setter  COVE->ClosedOverVariableEnvironment
            counter = newValue;
        },
        incrementBy: function (amount) { // method  // COVE->ClosedOverVariableEnvironment
            counter += amount;
        }
    }
}
let countObj = Counter();
console.log(countObj.getCounter());
countObj.setCounter(10);
console.log(countObj.getCounter());
countObj.incrementBy(20);
console.log(countObj.getCounter());

console.log();

countObj = Counter(100);
console.log(countObj.getCounter());
countObj.setCounter(10);
console.log(countObj.getCounter());
countObj.incrementBy(20);
console.log(countObj.getCounter());


// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


function createFunction() {
  return function printHello() {
    console.log("hello");
  }
  
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
function1();



function createFunctionPrinter(input) {
  // WRONG function print(input)
  return function print() {
    console.log(input);
  }

}

// UNCOMMENT THESE TO TEST YOUR WORK!
const printSample = createFunctionPrinter('sample');
printSample();
const printHello = createFunctionPrinter('hello');
printHello();



function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();



function addByX(x) {
  return function addedToY(y) {
    return y + x;
  }

}

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
console.log(addByTwo(1));

// now call addByTwo with an input of 2
console.log(addByTwo(2));


//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
	let firstValue = undefined;
  return function (num) {
    if (firstValue == undefined) {
      firstValue = func(num);
    }
  	return firstValue;
  } 
}

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6


function after(count, func) {
	let times = 0;
  return function ()  {
    times++;
    if (times >= count) {
      called();
    }
  }
}

const called = function() { console.log('hello') };
const afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed


function delay(func, wait) {
	setTimeout(func, wait);
}


function rollCall(names) {
	let index = 0;
	return function getCurrentName() {
    if (index < names.length) 
  		console.log(names[index++]);
    else {
      console.log("Everyone accounted for")
    }
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // -> Should log 'Victoria'
rollCaller() // -> Should log 'Juan'
rollCaller() // -> Should log 'Ruth'
rollCaller() // -> Should log 'Everyone accounted for'

