const express = require('express')
const app = express();
const Pokemon = require('./model/pokemon');
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

app.use(bodyParser({urlencoded: true, extended: false }))
app.use(methodOverride('_method'))


// index route
app.get('/pokemon', (req, res) =>{
    console.log(req.params)
    res.render('index.ejs', {
        pokemon: Pokemon
    })
})

// new 
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
})


app.post('/pokemon/', (req, res) => {
    Pokemon.push(req.body)
    res.redirect('/pokemon')
})

// delete
app.delete('/pokemon/:id', (req, res) => {
    Pokemon.splice(req.params.id);
    res.redirect('/pokemon');
});


// edit
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemon: Pokemon[req.params.id],
        id: req.params.id
    });
    console.log(req.body, "wrek dat body")
});


app.post('/pokemon/:id', (req, res) => {

    console.log(req.body, "<------ new req.body")
    Pokemon[req.params.id] = req.body;
    res.redirect('/pokemon');

});


// show route
app.get('/pokemon/:index', (req, res) => {
    console.log(req.params);
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.index]
    })
})











app.listen(3000, () => {
    console.log('Pokemon app is listening on port 3000');
})
module.exports = app