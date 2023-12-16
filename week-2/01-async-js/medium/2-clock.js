/** 
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
 */
function presentTime(){
    function timer(){
        var hours = new Date().getHours()
        var minutes = new Date().getMinutes()
        var seconds = new Date().getSeconds()
        var Twelvehour = hours % 12

        if(hours<10){
            hours = "0"+hours   
        }
        if(Twelvehour<10){
            Twelvehour = "0"+Twelvehour
        }
        if(minutes<10){
            minutes = "0"+minutes
        }
        if(seconds<10){
            seconds = "0"+seconds
        }

        if(hours>=12){
            var amPm = "PM"
        }else{
            var amPm = "AM"
        }

        console.clear()
        console.log(`${hours} : ${minutes} : ${seconds}`)
        
        console.log(`${Twelvehour} : ${minutes} : ${seconds} ${amPm}`)


        setTimeout(timer,1000)  
    }
    timer() 
}
presentTime()


