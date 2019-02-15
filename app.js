const express = require('express');
// when i log in i will get the key from docs https://stripe.com/docs/quickstart
const stripe = require('stripe')('sk_test_T7IlrPhRmz348L5V5kN5tEB2');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');


const app = express();

//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 

//SET STATIC FOLDER
app.use(express.static(`${__dirname}/public`));// we can same with path module



app.get('/', (req, res)=>{
    res.render('index');
});


const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log('Server started http://localhost:5000'))