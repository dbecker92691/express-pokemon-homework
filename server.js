const express = require('express')
const app = express();
const Pokemon = require('./model/pokemon');


// app.get('/pokemon', (req, res) => {
//     res.send(Pokemon)
// })

app.get('/pokemon', (req, res) =>{
    console.log(req.params)
    res.render('index.ejs', {
        pokemon: Pokemon
    })
})


app.get('/pokemon/:index', (req, res) => {
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.index]
    });
});











app.listen(3000, () => {
    console.log('Pokemon app is listening on port 3000');
})