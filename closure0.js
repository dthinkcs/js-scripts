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
