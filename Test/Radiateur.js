var Thermostat = require('./Thermostat.js');
class Radiateur {

    constructor() {
        this.listeThermo = [];
        this.temp = 0;
    }

    ajouterThermo(thermo) {
        this.listeThermo.push(thermo);
    }
   
    notifierThermo() {
        for(var i = 0; i < this.listeThermo.length; i++) {
            this.listeThermo[i].actualiser(this.temp);
        }
    }

    getTemp() {
        return this.temp;
    }

    setTemp(tempRecup) {
        this.temp = tempRecup;
        this.notifierThermo();
    }
}
module.exports = Radiateur;