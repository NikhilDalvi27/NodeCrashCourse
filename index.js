//todo below things can be done  easily using Express.js
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err)
    //             throw err;
    //         //todo writing to the RESPONSE HEADERS
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content);
    //     })
    // }
    //
    // else if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err)
    //             throw err;
    //         //todo writing to the RESPONSE HEADERS
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content);
    //     })
    // }
    //
    // else if (req.url === '/api/users') {
    //     const users = [
    //         {name :'Bob Smith', age:40},
    //         {name :'John Doe', age: 30}
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     //todo converting array of object into JSON
    //     res.end(JSON.stringify(users));
    // }


    //todo Building a file path
    let filePath = path.join(__dirname,'public',req.url==='/'?'index.html':req.url);
    console.log(filePath);

    //todo Extract Extension of the file
    let extname = path.extname(filePath);

    //todo Default Content Type
    let contentType = 'text/html';

    //todo Check the Extension type
    // and accordingly set the Content-Type

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }


    fs.readFile(filePath,(err, data) => {
       //todo err might happen if that file path is not found
       // or some 500 server error

        if(err){
            console.log('Error');
            console.log(err.code);
            if(err.code === 'ENOENT'){

                fs.readFile(path.join(__dirname,'public','404.html'),(err1, data1) => {
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.end(data1,"utf-8");

                })
            }
            else {
                res.writeHead(500);
                res.end(`Server Error : ${err.code}`);
            }
        }
        else{
            console.log('NoError');
            //todo NOTE THAT CONTENT TYPE NEEDS TO BE CORRECT
            // ELSE the client browser wont be able to correctly load the content
            // try changing---it will break in case of css
            res.writeHead(200,{'Content-Type':contentType});
            res.end(data,'utf-8');
        }
    })


});

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});