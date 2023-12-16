// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs")
//to get the data from the file 4file2.txt
fs.readFile("4file2.txt","utf-8", (err,data)=>{
    if(err){
        console.log(err)
    }
    catchData(data)
})

//the data received from the 4file2.txt will be ammended to 4file.txt file
function catchData(content){
    var dataToBeAmmended = content
 /**   
    //printing contents of the first file
    fs.readFile("4file.txt","utf-8", (err,data)=>{
        if(err){
            console.log(err)
        }
        console.log("File before ammending the below data:\n" + data)
    })
*/ 

/**   //printing the data that will be ammended
    console.log("The data that will be ammended is:\n" + content)
*/
  

    //logic to ammend the data to the file
    fs.appendFile("4file.txt",dataToBeAmmended,"utf-8",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Data ammended sucessfully")

    })

    //now printing the after results
    fs.readFile("4file.txt","utf-8", (err,data)=>{
        if(err){
            console.log(err)
        }
        console.log("Here are the final results:\n" + data)
    })
}


