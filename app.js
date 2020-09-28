const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

app.use(cors());
dotenv.config();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('pages/landing');
});

app.get('/introducere', (req, res) => {
  res.render('pages/introduction');
});

app.get('/stiinta-din-spatele-satelitilor', (req, res) => {
  res.render('pages/science');
});

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
