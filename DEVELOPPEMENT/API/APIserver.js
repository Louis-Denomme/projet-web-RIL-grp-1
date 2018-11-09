
//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  
var express = require('express');
var version = '/api/v1';

var mysql = require('mysql');
var pool = require('./bdd');

var randomstring = require("randomstring");


// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost';
var port = 3000;

// Nous créons un objet de type Express. 
var app = express();

//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes. 
var myRouter = express.Router();

//ROUTES
var agent = require('./routes/agent.js')(app, version);
var vehicule = require('./routes/vehicule.js')(app, version);
var agence = require('./routes/agence.js')(app, version);
var adresse = require('./routes/adresse.js')(app, version);
var client = require('./routes/client.js')(app,version);
// var droit = require('./routes/droit.js')(app,version);
// var historique = require('./routes/historique.js')(app,version);
// var photo = require('./routes/photo.js')(app,version);
// var profil = require('./routes/profil.js')(app,version);
// var statut = require('./routes/statut.js')(app,version);
// var typeHistorique = require('./routes/typeHistorique.js')(app,version);

// var liens = require('./routes/liens.js')(app,version);

// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);

// Démarrer le serveur 
app.listen(port, hostname, function () {
    console.log("////////////////////////////////////////////////////////////////////////////////////\n" +
        "////////////////////////////////////////////////////////////////////////////////////\n" +
        "Mon serveur fonctionne sur http://" + hostname + ":" + port + "\n" +
        "////////////////////////////////////////////////////////////////////////////////////\n" +
        "////////////////////////////////////////////////////////////////////////////////////\n");
});
