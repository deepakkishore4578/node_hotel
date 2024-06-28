//server.js
const express = require('express')
const app = express()
const db =require('./db')
// const Person = require('./Person');
const Menu= require('./menu');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const personRoutes = require('./p_routes')
app.use('/person',personRoutes);

const menuroutes = require('./menu_routes')
app.use('/menu',menuroutes);

app.listen(3000,()=>{           
   console.log('I am on port 3000')
})
 