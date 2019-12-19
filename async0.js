/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */

function delayedGreet() {
	setTimeout(() => console.log("welcome"), 2001)
}
// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome


// for (var i = 0; i < 1000000000; i++); 


/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  console.log("hello");
  setTimeout(()=>console.log("good bye"), 2000)
}
// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */

function brokenRecord() {
  // ADD CODE HERE
  setInterval(()=>console.log("hi again"), 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE
  const id = setInterval(()=>console.log("hi for now"), 1000);
	setTimeout(()=>clearInterval(id), 5000);
}
// Uncomment the following line to check your work!
limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
  // ADD CODE HERE
    const id = setInterval(func, interval);
		setTimeout(()=>clearInterval(id), duration);

}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */

function delayCounter(target, wait) {
	return function () {
    for (let i = 1; i <= target ; i++) {
      setTimeout(()=>console.log(i), i * wait);
    }
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000)
countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

