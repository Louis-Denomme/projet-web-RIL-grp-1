var Thermostat = require('./Thermostat.js');
class Radiateur {

    constructor() {
        this.listeThermo = new Array();
        this.temp = temp;
    }

    ajouterThermo(thermo) {
        this.listeThermo.push(thermo);
    }
   
    notifierThermo() {
        for(var i = 0; i < this.listeThermo.length; i++) {
            listeThermo[i].actualiser(this.temp);
        }
    }

    getTemp() {
        return this.temp;
    }

    setTemp(tempRecup) {
        this.temp = tempRecup;
    }
}
module.exports = Radiateur;