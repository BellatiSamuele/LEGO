var express = require('express');
var app = express();
const models = require('./models.json');

app.use(express.static(__dirname + '/public'));
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

app.get('/model', (req, res) => {
  const model = models.modelli.find((m) => m.id === req.query.id);
  res.render('model', {
    title: `About ${models.name} ${models.theme} ${models.year}`,
    model,
  });
});
