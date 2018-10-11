
//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  
var express = require('express'); 

// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 

var app = express(); 

// Nous créons un objet de type Express. 
var app = express(); 
 
//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes. 
var myRouter = express.Router(); 
 
// Je vous rappelle notre route (/users).  
myRouter.route('/users')
    // J'implémente les méthodes GET, PUT, UPDATE et DELETE
    // GET
    .get(function(req,res){ 
      res.json(
        {
          "demande" : "Liste des utilisateurs",
          "agents" :[
              {
                  "id" : "1",
                  "nom" : "DENOMME",
                  "prenom" : "Louis",
                  "idAdresse" : "1",
                  "tel" : "03 03 03 03 03",
                  "mobile" : "06 06 06 06 06",
                  "fax" : "03 03 03 03 04",
                  "email" : "louis.denomme@mail.mail",
                  "idProfil" : "0",
                  "idAgence" : "1"            
              },
              {
                  "id" : "2",
                  "nom" : "LEPAGE",
                  "prenom" : "Nicolas",
                  "idAdresse" : "2",
                  "tel" : "03 03 03 03 03",
                  "mobile" : "06 06 06 06 06",
                  "fax" : "03 03 03 03 04",
                  "email" : "nicolas.lepage@mail.mail",
                  "idProfil" : "1",
                  "idAgence" : "2" 
              },
              {
                  "id" : "3",
                  "nom" : "LOVERA",
                  "prenom" : "Ange",
                  "idAdresse" : "3",
                  "tel" : "03 03 03 03 03",
                  "mobile" : "06 06 06 06 06",
                  "fax" : "03 03 03 03 04",
                  "email" : "ange.lovera@mail.mail",
                  "idProfil" : "2",
                  "idAgence" : "2" 
              },
              {
                  "id" : "4",
                  "nom" : "TEST",
                  "prenom" : "Lola",
                  "idAdresse" : "3",
                  "tel" : "03 03 03 03 03",
                  "mobile" : "06 06 06 06 06",
                  "fax" : "03 03 03 03 04",
                  "email" : "lola.test@mail.mail",
                  "idProfil" : "3",
                  "idAgence" : "2" 
              }
          ],
          "methode" : "GET"
      }
      );
    })
    //POST
    .post(function(req,res){
          res.json({message : "Ajoute une nouvelle piscine à la liste", methode : req.method});
    })
    //PUT
    .put(function(req,res){ 
          res.json({message : "Mise à jour des informations d'une piscine dans la liste", methode : req.method});
    })
    //DELETE
    .delete(function(req,res){ 
    res.json({message : "Suppression d'une piscine dans la liste", methode : req.method});  
    }); 
 

// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);  

// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});
