var Thermostat = require('./Thermostat.js');
var Radiateur = require('./Radiateur.js');

var listeTherm = [];
var therm1 = new Thermostat();
var therm2 = new Thermostat();
var therm3 = new Thermostat();

listeTherm.push(therm1);
listeTherm.push(therm2);
listeTherm.push(therm3);

affTemp();

console.log('----------------------------------------------------');

var rad = new Radiateur();
rad.ajouterThermo(therm1);
rad.ajouterThermo(therm2);

rad.setTemp(25);
rad.notifierThermo();
affTemp();



function affTemp(){
    listeTherm.forEach(element => {
        element.afficher();
    });}