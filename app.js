var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.render('about');
});

app.get('/contact', function(req, res){
  res.render('contact');
});

app.get('/projects', function(req, res){
  res.render('projects');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log('server has started');
});
