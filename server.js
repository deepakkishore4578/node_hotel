//server.js
const express = require('express')
const app = express()
const db =require('./db')
// const Person = require('./Person');
const Menu= require('./menu');

require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const personRoutes = require('./p_routes')
app.use('/person',personRoutes);

const menuroutes = require('./menu_routes')
app.use('/menu',menuroutes);

const port = process.env.port || 3000;
app.listen(port,()=>{           
   console.log('I am on port 3000')
})
 