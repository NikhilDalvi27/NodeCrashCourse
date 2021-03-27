const fs = require('fs');
const path = require('path');



//todo Run one at a time

//todo Creating a Folder
// inside the Current Directory
// using the path and the file module

//todo uncomment
// fs.mkdir(path.join(__dirname,'/test'),{},function (err) {
//     if(err)
//         throw err;
//     console.log('Folder created');
// });



//todo Creating and Writing to a file
// Note use appendFile if you want to append some content to existing file
// DONT call writeFile multiple times...it will overwrite the content
// 2nd Parameter is the data which is written to the file
// Note the structure of append read and writeFile is all same


// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World!!',err=>{
//     if(err)
//         throw err;
//     console.log('File Created');
//
//     //todo this is used to append some more content to the file
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I love Node.js!!',err=>{
//         if(err)
//             throw err;
//         console.log('File Created');
//     })
//
// })


//todo Note here in the second parameter
// we need to mention the character encoding which is utf8
// Note in the callback err is the first parameter and actual data is the second parameter

// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
//     if(err)
//         throw err;
//     console.log(data);
// })

//todo For rename file the second parameter is the path of the renamed file

fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'),(err)=>{
    if(err)
        throw err;
    console.log('File Renamed');
})