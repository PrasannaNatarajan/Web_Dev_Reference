const express = require('express')
const app = express()
const port = 3000

// simple get
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// return a html page
app.get('/home',(req,res)=>{
    res.sendFile('index.html',{root:__dirname})
});

// return a json
app.get('/json',(req,res)=>{
    res.json({user:"prasanna"})
});

// read from parameters
app.get('/home/:id',(req,res)=>{
    res.send(req.params.id);
});

// read a query string
app.get('/name',(req,res)=>{
    res.send(req.query.name)
});


app.listen(port, () => console.log(`This app can be reached @ http://localhost:${port}!`))