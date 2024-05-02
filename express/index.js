const express = require('express')

const app = express()

const port = 4010
const HostName = 'localhost'

app.get('/',(req,res)=>{
    res.send('<h1>hello world</h1>')
})
app.get('/about',(req,res)=>{
    res.send('about page')
})

app.listen(port,() =>{
    console.log(`server running at ${HostName}:${port}`);
})