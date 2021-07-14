const express = require("express");
const path = require('path');
const app= express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});
const port= 8000;

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    gender: String,
    email: String,
    address: String,
    message: String,
    
  });
const Contact = mongoose.model('Contact', contactSchema);  
app.use("/static", express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req, res)=>{
    const con=""
    const params={}
    res.status(200).render('home.pug', params)
})
app.get('/contact',(req, res)=>{
    const con=""
    const params={}
    res.status(200).render('contact.pug',params)
})
app.get('/services',(req, res)=>{
    const con=""
    const params={}
    res.status(200).render('services.pug',params)
})
app.get('/about',(req, res)=>{
    const con=""
    const params={}
    res.status(200).render('about.pug',params)
})
app.get('/classinfo',(req, res)=>{
    const con=""
    const params={}
    res.status(200).render('classinfo.pug',params)
})
app.post('/contact',(req, res)=>{
    var mydata = new Contact(req.body);
    mydata.save().then(()=>{
        res.send("this item have been saved successfully")
    }).catch(()=>{
        res.status(400).send("This item was not saved")
    });
})


app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`);
})