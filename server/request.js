const http = require('http')

const options = {
    hostname:'fakestoreapi.com',
    path:'/products/1',
    methods:'GET'
}

const apiReq = http.request(options,(apiRes => {//this request method is used to call server to server network call

apiRes.on('data',(data =>{
        console.log(data.toString())
    }))
}))

apiReq.on('error',(e =>{
    console.log(e);
}))

apiReq.end()