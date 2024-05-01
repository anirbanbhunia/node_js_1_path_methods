const http = require('http') //getting the http module
const port = 3031 //initialize the port number
const HOSTNAME = 'localhost' //define the host name
const server = http.createServer((req,res) => { //create server

    //home
    //about page
    //contact page
    //product page
    //rest... > error
    if(req.url == '/'){
        res.statusCode = 200 //set 500 indicate error if 200 means successful
        res.setHeader('content-type','text/plain') // set content type application/json
        res.end('welcome to node js server by anirban bhunia') //end with server error text return
    }else if(req.url == '/about'){
        res.statusCode = 200 //set 500 indicate error if 200 means successful
        res.setHeader('content-type','text/plain') // set content type application/json
        res.end('about page') //end with server error text return
    }else if(req.url == '/contact'){
        res.statusCode = 200 //set 500 indicate error if 200 means successful
        res.setHeader('content-type','text/plain') // set content type application/json
        res.end('contact page') //end with server error text return
    }else if(req.url == '/product'){

        const options = {
            hostname:'fakestoreapi.com',
            path:'/products/1',
            methods:'GET'
        }
        
        const apiReq = http.request(options,(apiRes => {//this request method is used to call server to server network call
        
        apiRes.on('data',(data =>{
                console.log(data.toString())
                res.statusCode = 200 //set 500 indicate error if 200 means successful
            res.setHeader('content-type','application/json') // set content type application/json
            res.end(data.toString()) //end with server error text return
            }))
        }))
        
        apiReq.on('error',(e =>{
            console.log(e);
        }))
        
        apiReq.end()

    }else{
        res.statusCode = 500 //set 500 indicate error if 200 means successful
        res.setHeader('content-type','text/plain') // set content type application/json
        res.end('Server Error') //end with server error text return
    }
})

server.listen(port,() =>{ //list to the define port
    console.log(`server running at ${HOSTNAME}:${port}`);
})