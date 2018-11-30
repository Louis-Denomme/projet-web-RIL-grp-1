class Thermostat{
    constructor(){
        this.tempAff = 0;
    }

    setTempAff(tempAffichee) {
        this.tempAff = tempAffichee;
    }

    getTempAff(){
        return this.tempAff;
    }

    actualiser(newTemp){
        this.setTempAff(newTemp);
    }

    afficher(){
        console.log("La temperature actuelle du radiateur est de " + this.tempAff);
    }
}

module.exports = Thermostat;