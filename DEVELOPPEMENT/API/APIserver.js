
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

///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////     Liste des agents     ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

myRouter.route(version + '/agents')
    // J'implémente les méthodes GET, PUT, UPDATE et DELETE
    // GET
    .get(function (req, res) {
        pool.query('SELECT * FROM AGENT WHERE AGT_VALIDE = 1', function (error, results, fields) {
            if (error) throw error;
            results.forEach(line => {
                line.AGT_PWD = '***';
                line.AGT_SEL = '***';
            });
            res.json(results);
        });
    })
     //PUT
     .put(function (req, res) {
        var sel = randomstring.generate(6);        
        
        pool.query('INSERT INTO AGENT(AGT_IDTAGT, AGT_IDTPRF, AGT_IDTAGC, AGT_IDTADR, AGT_NOM, AGT_PRENOM, AGT_TEL, AGT_MOBILE, AGT_FAX, AGT_EMAIL, AGT_LOGIN, AGT_PWD, AGT_SEL, AGT_VALIDE)'+
        'VALUES('+
        '(SELECT MAXID FROM (SELECT MAX(AGT_IDTAGT+1) AS MAXID FROM AGENT) AS boucle), '+
        req.query.AGT_IDTPRF + ', ' + 
        req.query.AGT_IDTAGC + ', ' +
        req.query.AGT_IDTADR + ', ' + 
        '\''+req.query.AGT_NOM + '\', ' + 
        '\''+req.query.AGT_PRENOM + '\', ' +
        '\''+req.query.AGT_TEL + '\', ' +
        '\''+req.query.AGT_MOBILE + '\', ' + 
        '\''+req.query.AGT_FAX + '\', ' + 
        '\''+req.query.AGT_EMAIL+ '\', ' +
        '\''+req.query.AGT_LOGIN + '\', ' +
        '\''+req.query.AGT_PWD +sel+ '\', ' +
        '\''+sel + '\', ' + 
        '1 ' +  
        ');', function (error, results, fields) {
            if (error) throw error;
            res.json({ message: "User créé"});
        });    
    });

///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////     Agent     ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

myRouter.route(version + '/agent/:id')
    // J'implémente les méthodes GET, PUT, UPDATE et DELETE
    // GET
    .get(function (req, res) {        
        pool.query('SELECT * FROM AGENT WHERE AGT_IDTAGT = ?', req.params.id, function (error, results, fields) {
            if (error) throw error;
            results.forEach(line => {
                line.AGT_PWD = '***';
                line.AGT_SEL = '***';
            });
            res.json(results);
        });
    })
    //POST
    .post(function (req, res) {
        pool.query('UPDATE AGENT SET '+
        'AGT_IDTPRF = '+ req.query.AGT_IDTPRF + ', '+
        'AGT_IDTAGC = '+ req.query.AGT_IDTAGC + ', '+
        'AGT_IDTADR = '+ req.query.AGT_IDTADR + ', '+
        'AGT_NOM = '+ req.query.AGT_NOM + ', '+
        'AGT_PRENOM = '+ req.query.AGT_PRENOM + ', '+
        'AGT_TEL = '+ req.query.AGT_TEL + ', '+
        'AGT_MOBILE = '+ req.query.AGT_MOBILE + ', '+
        'AGT_FAX = '+ req.query.AGT_FAX + ', '+
        'AGT_EMAIL = '+ req.query.AGT_EMAIL +
        ' WHERE AGT_IDTAGT = ?', req.params.id, function (error, results, fields) {
            if (error) throw error;
            res.json({message: 'User modifié'});
        });
    })
    //DELETE
    .delete(function (req, res) {        
            pool.query('UPDATE AGENT SET '+
            'AGT_VALIDE = '+ 0 +
            ' WHERE AGT_IDTAGT = ?', req.params.id, function (error, results, fields) {
                if (error) throw error;
                res.json({message: 'User archivé'});
            });
    });


///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////     Connexion     ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
myRouter.route(version + '/connect')
    // J'implémente les méthodes GET, PUT, UPDATE et DELETE
    //POST
    .post(function (req, res) {
        pool.query('SELECT AGT_LOGIN, AGT_PWD, AGT_SEL FROM AGENT WHERE AGT_LOGIN = ?', [req.query.login], function (error, results, fields) {
            if (error) throw error;
            if (results.length == 1) {
                console.log(results[0].AGT_PWD == req.query.AGT_PWD + results[0].AGT_SEL);
                if (results[0].AGT_PWD == req.query.pwd + results[0].AGT_SEL) {
                    res.json({ loggedin: true });
                } else {
                    res.json({ error: 'bad password' });
                }
            }
            else
                res.json({ gtfo: true });
        });
    });

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////     Liste des véhicule     ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
myRouter.route(version + '/vehicules')
    .get(function(req,res){
        pool.query('SELECT * FROM VEHICULE WHERE VHL_IDTAGC = ?', [req.query.AGT_IDTAGC],function (error, results, fields){
            if(error) throw error;
            res.json({results});
        });
    })

    .put(function(req,res){
        pool.query('INSERT INTO VEHICULE(VHL_IDTVHL, VHL_IDTAGC, VHL_IDTSTT, VHL_MODELE, VHL_DATECIRCULATION,'+
        ' VHL_HAUTEUR, VHL_LARGEUR, VHL_LONGUEUR, VHL_POIDS, VHL_PUISSANCE, VHL_DATE_CTRL_TCH_PRC, VHL_DATE_CTRL_SVT,'+
        ' VHL_KILOMETRAGE, VHL_IMMATRICULATION, VHL_PERMIS, VHL_CARBURANT, VHL_CAPASTCK, VHL_CLASSEECO, VHL_VALIDE) VALUES()'+
        'VALUES('+
        '(SELECT MAXID FROM (SELECT MAX(VHL_IDTVHL+1) AS MAXID FROM VEHICULE) AS boucle), '+
        req.query.VHL_IDTAGC + ', '+        
        req.query.VHL_IDTSTT + ', ' + 
        req.query.VHL_MODELE + ', ' +
        req.query.VHL_DATECIRCULATION + ', ' + 
        +req.query.VHL_HAUTEUR + ', ' + 
        req.query.VHL_LARGEUR + ', ' +
        req.query.VHL_LONGUEUR + ', ' +
        req.query.VHL_POIDS + ', ' + 
        req.query.VHL_PUISSANCE + ', ' + 
        req.query.VHL_DATE_CTRL_TCH_PRC + ', ' +
        req.query.VHL_DATE_CTRL_SVT + ', ' +
        req.query.VHL_KILOMETRAGE + ', ' +
        '\''+req.query.VHL_IMMATRICULATION + '\', ' +
        '\''+req.query.VHL_PERMIS + '\', ' +
        '\''+req.query.VHL_CARBURANT + '\', ' +
        '\''+req.query.VHL_CAPASTCK + ', ' +
        '\''+req.query.VHL_CLASSEECO + '\', ' +
        '1 ' +
        ');', function (error, results, fields){
            if(error) throw error;
            res.json({results});
        });
    });

// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);

// Démarrer le serveur 
app.listen(port, hostname, function () {
    console.log("Mon serveur fonctionne sur http://" + hostname + ":" + port + "\n");
});
