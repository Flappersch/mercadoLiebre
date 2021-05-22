const express = require ('express');
const app = express ();

const path = require ('path');

/*Configuraciones*/

app.use(express.static('public'));

// alternativa ---> app.use (express.static(path.resolve(__dirname, 'public'))); <------

/*Rutas*/

app.get('/', (req, res) => {
    res.sendFile (path.join(__dirname,'/views/home.html'));
}),

app.get('/register', (req, res) => {
    res.sendFile (path.join(__dirname,'/views/register.html'));
}),

app.get('/login', (req, res) => {
    res.sendFile (path.join(__dirname,'/views/login.html'));
}),

/* Server */

//app.listen('3000', () => console.log ('Estamos corriente en el puerto 3000'));


// Para Heroku
app.listen(process.env.PORT || 3000, () => console.log('Servidor corriendo en el puerto 3000'));