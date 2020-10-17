const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const books = require('./books');

const app = express();
const port = 4242;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use('/books', express.static('public'));
app.use('/books', books)
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
	res.redirect('/books/search');
});


app.listen(port, () => {
	console.log('Express server running at http://127.0.0.1:'+port+'/');
});
