var pool = require('../bdd');

module.exports = function (app, version) {
    app
        .get(version + '/vehicules', function (req, res) {
            pool.query('SELECT * FROM VEHICULE WHERE VHL_VALIDE = 1 AND VHL_IDTAGC = ?', [req.query.AGT_IDTAGC], function (error, results, fields) {
                if (error) throw error;
                res.json({ results });
            });
        })

        .put(version + '/vehicules', function (req, res) {

            pool.query('INSERT INTO VEHICULE ' +
                // '(VHL_IDTVHL, VHL_IDTAGC, VHL_IDTSTT, VHL_MODELE, VHL_DATECIRCULATION,' +
                // ' VHL_HAUTEUR, VHL_LARGEUR, VHL_LONGUEUR, VHL_POIDS, VHL_PUISSANCE, VHL_DATE_CTRL_TCH_PRC, VHL_DATE_CTRL_SVT,' +
                // ' VHL_KILOMETRAGE, VHL_IMMATRICULATION, VHL_PERMIS, VHL_CARBURANT, VHL_CAPASTCK, VHL_CLASSEECO, VHL_VALIDE) ' +
                'VALUES (' +
                '(SELECT MAXID FROM (SELECT MAX(VHL_IDTVHL+1) AS MAXID FROM VEHICULE) AS boucle), ' +
                req.query.VHL_IDTAGC + ', ' +
                req.query.VHL_IDTSTT + ', ' +
                '\'' + req.query.VHL_MODELE + '\', ' +
                '\'' + req.query.VHL_DATECIRCULATION + '\', ' +
                parseFloat(req.query.VHL_HAUTEUR) + ', ' +
                parseFloat(req.query.VHL_LARGEUR) + ', ' +
                parseFloat(req.query.VHL_LONGUEUR) + ', ' +
                parseFloat(+req.query.VHL_POIDS) + ', ' +
                parseFloat(+req.query.VHL_PUISSANCE) + ', ' +
                '\'' + req.query.VHL_DATE_CTRL_TCH_PRC + '\', ' +
                '\'' + req.query.VHL_DATE_CTRL_SVT + '\', ' +
                req.query.VHL_KILOMETRAGE + ', ' +
                '\'' + req.query.VHL_IMMATRICULATION + '\', ' +
                '\'' + req.query.VHL_PERMIS + '\', ' +
                '\'' + req.query.VHL_CARBURANT + '\', ' +
                parseFloat(req.query.VHL_CAPASTCK) + ', ' +
                '\'' + req.query.VHL_CLASSEECO + '\', ' +
                '1' +
                ');', function (error, results, fields) {
                    if (error) {
                        res.json(error);
                        throw error;
                    }
                    else {
                        res.json({ message: "véchiucle inséré" });
                    }
                });
        })

        .get(version + '/vehicule/:id', function(req,res){
            pool.query('SELECT * FROM VEHICULE WHERE VHL_IDTVHL = ?',req.params.id, function (error, results, fields) {
                if (error) throw error;
                res.json({ results });
            });
        })
    
        .post(version + '/vehicule/:id', function (req, res) {
            pool.query('UPDATE VEHICULE SET ' +
                'VHL_IDTAGC = ' + req.query.VHL_IDTAGC
                + ', VHL_IDTSTT = ' + req.query.VHL_IDTSTT
                + ', VHL_MODELE = \'' + req.query.VHL_MODELE + '\''
                + ', VHL_DATECIRCULATION = \'' + req.query.VHL_DATECIRCULATION + '\''
                + ', VHL_HAUTEUR = ' + parseFloat(req.query.VHL_HAUTEUR)
                + ', VHL_LARGEUR = ' + parseFloat(req.query.VHL_LARGEUR)
                + ', VHL_LONGUEUR = ' + parseFloat(req.query.VHL_LONGUEUR)
                + ', VHL_POIDS = ' + parseFloat(req.query.VHL_POIDS)
                + ', VHL_PUISSANCE = ' + parseFloat(req.query.VHL_PUISSANCE)
                + ', VHL_DATE_CTRL_TCH_PRC = \'' + req.query.VHL_DATE_CTRL_TCH_PRC + '\''
                + ', VHL_DATE_CTRL_SVT = \'' + req.query.VHL_DATE_CTRL_SVT + '\''
                + ', VHL_KILOMETRAGE = ' + req.query.VHL_KILOMETRAGE
                + ', VHL_IMMATRICULATION = \'' + req.query.VHL_IMMATRICULATION + '\''
                + ', VHL_PERMIS = \'' + req.query.VHL_PERMIS + '\''
                + ', VHL_CARBURANT = \'' + req.query.VHL_CARBURANT + '\''
                + ', VHL_CAPASTCK = ' + parseFloat(req.query.VHL_CAPASTCK)
                + ', VHL_CLASSEECO = \'' + req.query.VHL_CLASSEECO + '\''
                + 'WHERE VHL_IDTVHL = ?', req.params.id, function (error, results, fields) {
                    if (error) throw error;
                    res.json({ message: 'Véhicule modifié' });
                });
        })
    
        .delete(version + '/vehicule/:id', function (req, res) {
            pool.query(
                'UPDATE VEHICULE SET VHL_VALIDE = 0 ' +
                'WHERE VHL_IDTVHL = ?', req.params.id, function (error, results, fields) {
                    if (error) throw error;
                    res.json({ message: 'Véhicule supprimé' });
                });
        });
}