//Create Secure File Upload Endpoint in Node.js
const fs = require('fs');
fs.writeFile(
    "secure.txt",
    "Private Data",
    { flag: "wx", mode: 0o600 },
    () => console.log("Secure file created!")
);


// file system using flag and node

// lab 1

// Read File Using r  Flag 
// const fs = require("fs");
fs.readFile("secure.txt",{flag:"r",encoding:"utf8"},(err,data)=>{
    if(err)throw err;
    console.log(data);

});

// lab 2

// write File using W Flag

fs.writeFile("secure.txt","Hello World",{flag: "w"},()=>{
    console.log("file written");
    });

    // lab 3

    // Append Data Using A flag
    fs.writeFile("log.txt","log entry \n ",{flag:"a"},()=>{
        console.log("Log appended");
    });
