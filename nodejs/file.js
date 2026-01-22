// async methos write 

let fs =require('fs');
fs.writeFile("demo.txt","welcome to file module",(err)=>{
    if(err){
        console.log("Error creating file");
    }else{
        console.log("demo file created");
    }
});


//  sync method write

// let fs =require('fs');

fs.writeFileSync("syncFile.txt","Welcome to file system module sync file");
console.log("Sync file created");

// asyn  read

fs.readFile("asynFile/txt","utf8",(err,data)=>{
    if (err){
        console.log("Error reading file");

    }else{
        console.log("Asyn file data ",data);
    }

})

// sync read

const data = fs.readFileSync("syncFile.txt","utf8");
console.log("sync file data",data);

// append data file 
// Async 

fs.appendFile("asyncFile.txt","\nNew data added",(err)=>{
    if(err){
        console.log("Error appending ");

    }else{
        console.log("Asyn data appended");
    }
});

// Sync 

fs.appendFileSync("syncFile.txt","\nNew data added");
console.log("Sync data appended");

// Rename a File

// Async
fs.rename("asyncFile.txt", "asyncRenamed.txt", (err) => {
    if (err) {
        console.log("Rename failed");
    } else {
        console.log("Async file renamed");
    }
});

// Sync
fs.renameSync("syncFile.txt", "syncRenamed.txt");
console.log("Sync file renamed");

