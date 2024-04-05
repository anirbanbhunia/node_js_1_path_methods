const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.write('<h1>Hello, Node.Js!</h1>')
    }else if(req.url === '/about'){
        res.write("<h1>I am Anirban Bhunia</h1>")
    }
    res.end()
})
server.listen(5001) // in which port i run the server
console.log('The Http server running on port 5001');
//in this call back it takes two things requist and response

//Explenation of this code

// This code is a simple Node.js application that creates an HTTP server using the built-in `http` module. Let's break down each part of the code:

// 1. **Importing the `http` Module**:
//    ```javascript
//    const http = require('http')
//    ```
//    Here, the code imports the `http` module, which is a built-in module in Node.js used for creating HTTP servers and clients.

// 2. **Creating an HTTP Server**:
//    ```javascript
//    const server = http.createServer((req, res) => {
//        // Request handling logic goes here
//    })
//    ```
//    This line creates an HTTP server using the `http.createServer()` method. It takes a callback function as an argument, which will be invoked every time a request is made to the server. The callback function takes two parameters: `req` (the request object) and `res` (the response object).

// 3. **Request Handling Logic**:
//    Inside the callback function, the code checks the URL of the incoming request (`req.url`) using an `if...else if` statement:
//    ```javascript
//    if (req.url === '/') {
//        res.write('<h1>Hello, Node.Js!</h1>')
//    } else if (req.url === '/about') {
//        res.write("<h1>I am Anirban Bhunia</h1>")
//    }
//    ```
//    - If the URL is `'/'` (root), it responds with `<h1>Hello, Node.Js!</h1>`.
//    - If the URL is `'/about'`, it responds with `<h1>I am Anirban Bhunia</h1>`.
//    Note that `res.write()` is used to write a response to the client.

// 4. **Ending the Response**:
//    After writing the response content, the code ends the response using `res.end()`:
//    ```javascript
//    res.end()
//    ```

// 5. **Server Listening**:
//    Finally, the code instructs the server to listen on port `5001` for incoming HTTP requests:
//    ```javascript
//    server.listen(5001)
//    ```
//    This line starts the server and makes it listen on port `5001`. Clients can then send HTTP requests to this server on that port.

// In summary, this code creates a basic HTTP server using Node.js that responds differently based on the requested URL (`'/'` or `'/about'`). When a request is received, the server sends back a corresponding HTML response.

