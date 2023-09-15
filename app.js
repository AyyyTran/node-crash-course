const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const dbURI =
  'mongodb+srv://ayyytran:OMh3lTPeDT6Lt1Bo@cluster0.zoz4k3q.mongodb.net/';
const app = express();

mongoose
  .connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set('view engine', 'ejs');

//middleware and static files

app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', {title: 'About'});
});

app.get('/blogs', (req, res) => {
  Blog.find()
    .sort({createdAt: -1})
    .then((result) => {
      res.render('index', {title: 'All Blogs', blogs: result});
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get('/blogs/create', (req, res) => {
  res.render('create', {title: 'Create a new Blog'});
});

app.use((req, res) => {
  res.status(404).render('404', {title: '404'});
});
