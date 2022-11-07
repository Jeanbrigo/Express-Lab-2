require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;


app.get('/greeting/:name',(req, res)=>{
    res.send(`Hello, ${req.params.name}.`)
})


app.listen(PORT, () =>{
    console.log(`listening on ${PORT}...`)
})