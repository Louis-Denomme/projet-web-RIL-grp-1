var Thermostat = require('./Thermostat.js');

var listeTherm = [];
var therm1 = new Thermostat();
var therm2 = new Thermostat();
var therm3 = new Thermostat();

listeTherm.push(therm1);
listeTherm.push(therm2);
listeTherm.push(therm3);

listeTherm.forEach(element => {
    element.afficher();
});

