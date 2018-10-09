var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function(message){
    console.log(message);
});

jeu.on('win', function(message){
    console.log(message);
});


var resultat = Math.floor(Math.random() * 10)


if  (resultat > 7) {
    jeu.emit('win', 'Vous avez gagnez !');
} else {
    jeu.emit('gameover', 'Vous avez perdu !');
}


