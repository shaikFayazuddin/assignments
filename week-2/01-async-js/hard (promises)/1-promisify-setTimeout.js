/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, n*1000);
    })
}
let ans = wait(5000)
ans.then(function(){
    console.log("Promise resolved")
})


module.exports = wait;

// const p1 = new Promise((resolve,reject)=>{ setTimeout(()=> resolve("Promise got resolved"),5000)})

// const p2 = new Promise((resolve,reject)=>{ setTimeout(()=> resolve("Promise got resolved"),10000)})


// async function wow(){
//     console.log("hello world")

//     const val = await p1
//     console.log("fay1")
//     console.log(val)

//     const val2= await p2
//     console.log("byw")
//     console.log(val2)
// }

// wow()