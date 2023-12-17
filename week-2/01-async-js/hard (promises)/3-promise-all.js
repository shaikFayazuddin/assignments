/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("First Promise resolved")
        },t*1000)
    })
}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Second Promise resolved")
        },t*1000)
    })
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Third Promise resolved")
        },t*1000)
    })
}


function calculateTime(t1, t2, t3) {
    const p1 = wait1(t1)
    const p2 = wait1(t2)
    const p3 = wait1(t3)

    const start = new Date()
    return Promise.all([
        p1,
        p2,
        p3
    ]).then(()=>{
        const end = new Date()
        const timeConsumed = end - start
        return timeConsumed
    })
}

module.exports = calculateTime;

/** 
function allPromises(f1,f2,f3){
    f1(2).then(()=>console.log("First Promise resolved"))
    f2(3).then(()=>console.log("Second Promise resolved"))
    f3(4).then(()=>console.log("Third Promise resolved"))
}
allPromises(wait1,wait2,wait3)
*/
/** 
Promise.all([wait1(2),wait2(4),wait3(6)]).then((values)=>{
    console.log(values)
})
*/
