const express = require('express');
const app = express();
const port = 3040;
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));


app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port));