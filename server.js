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

app.get('/magic/:question', (req, res)=> {
    const question = req.params.question;
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    res.send(`${question} 
    <h1>${responses[Math.floor(Math.random() * 20)]}</h1>`)
})


app.listen(PORT, () =>{
    console.log(`listening on ${PORT}...`)
})