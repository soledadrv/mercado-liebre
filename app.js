const express = require('express');
const app = express();
const port = 3040;
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));


app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port));