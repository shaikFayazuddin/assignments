/** 
## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require("fs")

fs.readFile("1file.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    fileCleaner(data)
    // console.log(data)

})
function fileCleaner(data){
    data = data.replace(/\s+/g, " ")
    fs.writeFile("1file.txt",data,"utf-8",(err)=>{
        if(err){
            console.log(err)
        }
        console.log("File cleaned successfully:\n" + data)
    })
}
