const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const Counter = require('./models/Counter');

const app = express();

app.use(cors());
dotenv.config();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => {
    if (process.env.NODE_ENV === 'development')
      console.log('Connected to database');
  }
);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', async (req, res) => {
  const counter = await Counter.findByIdAndUpdate('5f721b57646bbf29ccc04e35', {
    $inc: { views: 1 },
  });
  res.render('pages/landing', { number: counter.views });
});

app.get('/introducere', (req, res) => {
  res.render('pages/introduction');
});

app.get('/stiinta-din-spatele-satelitilor', (req, res) => {
  res.render('pages/science');
});

app.get('/scurta-istorie-a-sateliltior', (req, res) => {
  res.render('pages/history.ejs');
});

app.get('/clasificare', (req, res) => {
  res.render('pages/types.ejs');
});

app.get('/incheiere', (req, res) => {
  res.render('pages/ending.ejs');
});

app.get('/testeaza-ti-cunostintele', (req, res) => {
  res.render('pages/quiz.ejs');
});

app.get('/conferinta-video', (req, res) => {
  res.render('pages/video.ejs');
});

app.get('*', (req, res) => {
  res.status(404).render('pages/404.ejs');
});

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
