const path = require('path');
const express = require('express');
const morgan = require('morgan');
const expHbs  = require('express-handlebars');
const app = express();
const port = 3000;

app.use(morgan('combined'));

const handlebars = expHbs.create({
  defaultLayout: 'main',
    extname: '.hbs'
});

app.engine('.hbs', handlebars.engine);

app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));


app.get('/', (req, res) => {
  res.render('home');
})


app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})