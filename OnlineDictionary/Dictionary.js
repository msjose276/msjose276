

const express = require('express');
const app = express();
const {getDictionaryResult} = require('./word');
var cors = require('cors')

app.use(cors())
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

app.use('/public',express.static(__dirname+'/public'));

app.get('/',function (req,res){
    res.sendFile(__dirname+'/dict.html');
});

app.post('/lookup',async function (req,res){
    var searchword = req.body.word;
    var result = await getDictionaryResult(searchword);
    console.log("req.url:"+req.url);
    res.send(result);
    
});

const port = 3000;
app.listen(port,()=>{console.log(`Listening on the port ${port}`)});