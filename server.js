const express = require('express')
const app = express();
const Pokemon = require('./model/pokemon');




// app.get('/', () =>{
//     app.render('index.ejs', )
// })














app.listen(3000, () => {
    console.log('Pokemon app is listening on port 3000');
})