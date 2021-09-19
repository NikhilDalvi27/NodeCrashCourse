const http = require('http');


//todo Creating a Server ..note no need of xampp
http
.createServer(((req, res) => {

    //todo to output to the browser
    res.write('Hello World');
    res.end();
}))
.listen(5000,()=> console.log('Server running......'));

