require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;


app.get('/greeting/:name',(req, res)=>{
    res.send(`Hello, ${req.params.name}.`)
})

app.get('/tip/:total/:tipPercentage',(req, res)=>{
    let total = parseInt(req.params.total);
    let tipPercent = (parseInt(req.params.tipPercentage))/100;
    let tipAmount = (total * tipPercent);
    res.send(String(tipAmount));
})


app.listen(PORT, () =>{
    console.log(`listening on ${PORT}...`)
})