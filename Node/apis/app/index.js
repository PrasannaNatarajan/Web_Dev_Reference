const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000

app.use(bodyParser.json());

// handle GET
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
// eg url localhost:3000/name?name=prasanna
app.get('/name',(req,res)=>{
    res.send(req.query.name)
});


// return a txt file
app.get('/download',(req,res)=>{
    var file = __dirname + '/index.png';
    res.download(file,'index.png');
});

// handle POST
app.post('/',(req,res)=>{
    var user_name=req.body.user;
    var password=req.body.password;
    console.log("User name = "+user_name+", password is "+password);
    // to return a html
    //res.json("User name = "+user_name+", password is "+password);

    // to return json
    res.json({user:user_name,password:password});
});

app.listen(port, () => console.log(`This app can be reached @ http://localhost:${port}!`))