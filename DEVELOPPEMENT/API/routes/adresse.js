var pool = require('../bdd');

module.exports = function (app, version) {
    app
        .get(version + '/adresses', function (req, res) {
            pool.query('SELECT * FROM ADRESSE WHERE ADR_VALIDE = 1', function (error, results, fields) {
                if (error) throw error;
                res.json({ results });
            });
        })

        .put(version + '/adresses', function (req, res) {

            pool.query('INSERT INTO ADRESSE ' +
                'VALUES (' +
                '(SELECT MAXID FROM (SELECT MAX(ADR_IDTADR+1) AS MAXID FROM ADRESSE) AS boucle), ' +
                req.query.ADR_NUM + ', ' +
                '\'' + req.query.ADR_COMP + '\', ' +
                '\'' + req.query.ADR_VOIE + '\', ' +
                req.query.ADR_CODEPOSTAL + ', ' +
                '\'' + req.query.ADR_VILLE + '\', ' +
                '\'' + req.query.ADR_PAYS + '\', ' +
                '1' +
                ');', function (error, results, fields) {
                    if (error) {
                        res.json(error);
                        throw error;
                    }
                    else {
                        res.json({ message: "Adresse insérée" });
                    }
                });
        })

        .get(version + '/adresse/:id', function (req, res) {
            pool.query('SELECT * FROM ADRESSE WHERE ADR_IDTADR = ?', req.params.id, function (error, results, fields) {
                if (error) throw error;
                res.json({ results });
            });
        })

        .post(version + '/adresse/:id', function (req, res) {
            pool.query('UPDATE ADRESSE SET ' +
                'ADR_NUM = ' + req.query.ADR_NUM
                + ', ADR_COMP = \'' + req.query.ADR_COMP + '\''
                + ', ADR_VOIE = \'' + req.query.ADR_VOIE + '\''
                + ', ADR_CODEPOSTAL = \'' + req.query.ADR_CODEPOSTAL + '\''
                + ', ADR_VILLE = \'' + req.query.ADR_VILLE + '\''
                + ', ADR_PAYS = \'' + req.query.ADR_PAYS + '\''
                + 'WHERE ADR_IDTADR = ?', req.params.id, function (error, results, fields) {
                    if (error) throw error;
                    res.json({ message: 'Adresse modifiée' });
                });
        })

        .delete(version + '/adresse/:id', function (req, res) {
            pool.query(
                'UPDATE ADRESSE SET ADR_VALIDE = 0 ' +
                'WHERE ADR_IDTADR = ?', req.params.id, function (error, results, fields) {
                    if (error) throw error;
                    res.json({ message: 'Adresse supprimé' });
                });
        });
}