const express = require('express')
const app = express();
const Pokemon = require('./model/pokemon');
const methodOverride = require('method-override')


app.use(methodOverride('_method'))


// index route
app.get('/pokemon', (req, res) =>{
    console.log(req.params)
    res.render('index.ejs', {
        pokemon: Pokemon
    })
})

// show route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.index]
    });
});

// delete

app.delete('/:id', (req, res) => {
    Pokemon.splice(req.params.id);
    res.redirect('/pokemon');
});

// edit

app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemon: Pokemon[req.params.id],
        id: req.params.id
    });
});










app.listen(3000, () => {
    console.log('Pokemon app is listening on port 3000');
})
module.exports = app