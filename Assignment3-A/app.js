const express = require('express') ;

const app = express() ;
const port = 3000 ;

// app.use(express.static('public')) ;

// app.use('/css', express.static(__dirname+'./public/css')) ;

app.get('/',(req,res)=>{
    // res.sendFile('./nav.html', {root: __dirname})
    res.sendFile('./public/home.html', {root: __dirname}) ;
}) ;

 app.get('/about',(req,res)=>{
     res.sendFile('./public/about.html', {root: __dirname}) ;

 }) ;

app.get('/contact',(req,res)=>{
    res.sendFile('./public/contact.html', {root: __dirname}) ;

}) ;

app.listen(port, (req,res)=>{
    console.log(`listening on port ${port}`);
})