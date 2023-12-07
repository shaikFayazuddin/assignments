/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


var start = new Date().getMilliseconds()


function calculateTime(n) {
    let sum = 0
    for(let i=1;i<=n;i++){
        sum += i
    }
    return sum;
}
console.log(calculateTime(10000000))
var end = new Date().getMilliseconds()


let timeTaken = end -start
console.log(timeTaken + " milli seconds")


//or it can also be done using performance.now() 

/*** 
var start = performance.now()


function calculateTime(n) {
    let sum = 0
    for(let i=1;i<=n;i++){
        sum += i
    }
    return sum;
}

console.log(calculateTime(10000000))

var end = performance.now()


let timeTaken = end -start
console.log(timeTaken + " milli seconds")
*/
