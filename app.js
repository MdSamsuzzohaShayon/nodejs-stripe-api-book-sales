const express = require('express');
// when i log in i will get the key from docs https://stripe.com/docs/quickstart
const stripe = require('stripe')('sk_test_T7IlrPhRmz348L5V5kN5tEB2');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');


const app = express();


const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log('Server started http://localhost:5000'))