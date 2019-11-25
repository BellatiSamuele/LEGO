var express = require('express');
var app = express();
const models = require('./models.json');

app.set('view engine', 'pug'); 

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.render('index', {
      title: "Scegli il modello",
      models: models.modelli
 });
});
