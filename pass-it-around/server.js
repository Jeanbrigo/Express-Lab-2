const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('99 Bottles of beer on the wall. <a href="http://localhost:3000/98">Take one down, pass it around...</a>' )
}) 

app.get('/0', (req,res)=>{
    res.send(`0 Bottles of beer on the wall. <a href="http://localhost:3000/">Start over!</a>`)
})

app.get('/:number_of_bottles', (req,res)=>{
    const oneDown = (parseInt(req.params.number_of_bottles))-1;
    res.send(`${req.params.number_of_bottles} Bottles of beer on the wall. <a href="http://localhost:3000/${oneDown}">Take one down, pass it around...</a>`)
})



app.listen(PORT, () =>{
    console.log(`listening on ${PORT}...`)
})