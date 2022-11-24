const express = require("express");
const morgan = require("morgan");
const contactsRoutes = require('./routes/contacts.routes.js');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/contacts', contactsRoutes);

app.listen(8080, ()=>{
    console.log('Server OK, port 8080')
});