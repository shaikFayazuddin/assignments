// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function counter(n){
    let stopwatch = setInterval(count,1000)
    let localCounter = 0;
    function count(){
        if(localCounter<=n){
            console.clear()
            console.log(localCounter + " seconds")
        }
        else{
            clearInterval(stopwatch)
        }
    localCounter++
    }
}
counter(4)

//In future will try to add logic that shows minutes + seconds after 1 minute is lapsed.
//ex: 1 min 20 sec

