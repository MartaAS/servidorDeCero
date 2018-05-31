const express = require('express');
const app = express();

// CONFIGURATION:
app.use(express.static('src'));
app.set('view engine', 'pug');
app.set('views', 'views');

// ROUTES:
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/personal-data', (request, response) => {
  console.log('Estoy aqui!!!!');
  let personalData = [
    {
      name: 'Marta',
      surname: 'Aguilar',
      age: 27
    },
    {
      name: 'Legolas',
      surname: 'Aguilar',
      age: 4
    },
    {
      name: 'Saruman',
      surname: 'Aguilar',
      age: 2
    },
    {
      name: 'Rodrigo',
      surname: 'Algora',
      age: 29
    }
  ];
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(personalData));
  //Esto es para enviar mi objeto al servidor por eso lo converimos en un objeto plano
});

// START APP
app.listen(3000, () => console.log('Example app listening on port 3000!'))
