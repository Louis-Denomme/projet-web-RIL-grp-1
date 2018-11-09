var pool = require('../bdd');

module.exports = function (app, version) {
    app
        .get(version + '/clients', function (req, res) {
            pool.query('SELECT * FROM CLIENT;', function (error, results, fields) {
                if (error) throw error;
                res.json({ results });
            });
        })

        .put(version + '/clients', function (req, res) {

            pool.query('INSERT INTO CLIENT ' +
                'VALUES (' +
                '(SELECT MAXID FROM (SELECT MAX(CLI_IDTCLI+1) AS MAXID FROM CLIENT) AS boucle), ' +
                req.query.CLI_IDTADR + ', ' +
                '\'' + req.query.CLI_NOM + '\', ' +
                '\'' + req.query.CLI_PRENOM + '\', ' +
                req.query.CLI_TEL + ', ' +
                '\'' + req.query.CLI_EMAIL + '\', ' +
                req.query.CLI_FAX + ', ' +
                req.query.CLI_MOBILE + '\', ' +
                '\'' + req.query.CLI_DATECRE + '\', ' +
                '1' +
                ');', function (error, results, fields) {
                    if (error) {
                        res.json(error);
                        throw error;
                    }
                    else {
                        res.json({ message: "Client inséré" });
                    }
                });
        })

        .get(version + '/client/:id', function (req, res) {
            pool.query('SELECT * FROM CLIENT WHERE CLI_IDTCLI = ?', req.params.id, function (error, results, fields) {
                if (error) throw error;
                res.json({ results });
            });
        })

        .post(version + '/client/:id', function (req, res) {
            pool.query('UPDATE CLIENT SET ' +
                'CLI_IDTADR = ' + req.query.CLI_IDTADR
                + ', CLI_NOM = \'' + req.query.CLI_NOM + '\''
                + ', CLI_PRENOM = \'' + req.query.CLI_PRENOM + '\''
                + ', CLI_TEL = ' + req.query.CLI_TEL
                + ', CLI_EMAIL = \'' + req.query.CLI_EMAIL + '\''
                + ', CLI_FAX = ' + req.query.CLI_FAX
                + ', CLI_MOBILE = ' + req.query.CLI_MOBILE
                + ', CLI_DATECRE = \'' + req.query.CLI_DATECRE + '\''
                + 'WHERE CLI_IDTCLI = ?', req.params.id, function (error, results, fields) {
                    if (error) throw error;
                    res.json({ message: 'Client modifié' });
                });
        })

        .delete(version + '/client/:id', function (req, res) {
            pool.query(
                'UPDATE CLIENT SET CLI_VALIDE = 0 ' +
                'WHERE CLI_IDTCLI = ?', req.params.id, function (error, results, fields) {
                    if (error) throw error;
                    res.json({ message: 'Adresse supprimé' });
                });
        });
}