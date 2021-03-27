const http = require('http');


//todo Creating a Server ..note no need of xampp
http
.createServer(((req, res) => {

    res.write('Hello World');
    res.end();
}))
.listen(5000,()=> console.log('Server running......'));

