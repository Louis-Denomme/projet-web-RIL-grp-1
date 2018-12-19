var pool = require('../bdd');

module.exports = function (app, version) {
    app
        .get(version + '/agences', function (req, res) {
            pool.query('SELECT * FROM AGENCE WHERE AGC_VALIDE = 1', function (error, results, fields) {
                if (error) throw error;
                res.json(results);
            });
        })

        .put(version + '/agences', function (req, res) {
            let sql = 'INSERT INTO AGENCE ' +
                'VALUES(' +
                '(SELECT MAXID FROM (SELECT MAX(AGC_IDTAGC+1) AS MAXID FROM AGENCE) AS boucle), ' +
                req.body.AGC_IDTADR + ', ' +
                req.body.AGC_IDTPHO + ', ' +
                '\'' + req.body.AGC_NOM + '\', ' +
                '\'' + req.body.AGC_TEL + '\', ' +
                '\'' + req.body.AGC_EMAIL + '\', ' +
                '\'' + req.body.AGC_FAX + '\', ' +
                '1 ' +
                ');';
            //console.log(req.body,sql);
            pool.query(sql, function (error, results, fields) {
                if (error) throw error;
                res.json({
                    message: "Agence créée"
                });
            });
        })

        .get(version + '/agence/:id', function (req, res) {
            pool.query('SELECT * FROM AGENCE WHERE AGC_IDTAGC = ?', req.params.id, function (error, results, fields) {
                if (error) throw error;
                res.json(results[0]);
            });
        })
        //POST
        .post(version + '/agence', function (req, res) {
            let sql = 'UPDATE AGENCE SET ' +
            'AGC_IDTADR = ' + req.body.AGC_IDTADR + ', ' +
            'AGC_IDTPHO = ' + req.body.AGC_IDTPHO + ', ' +
            'AGC_NOM = ' + '\'' + req.body.AGC_NOM + '\', ' +
            'AGC_TEL = ' + '\'' + req.body.AGC_TEL + '\', ' +
            'AGC_EMAIL = ' + '\'' + req.body.AGC_EMAIL + '\', ' +
            'AGC_FAX = ' + '\'' + req.body.AGC_FAX + '\' ' +
            'WHERE AGC_IDTAGC = ?';
            console.log(sql);
            pool.query(sql, req.body.AGC_IDTAGC,
                function (error, results, fields) {
                    if (error) throw error;
                    res.json({
                        message: 'Agence modifié'
                    });
                });
        })
        //DELETE
        .delete(version + '/agence/:id', function (req, res) {
            pool.query('UPDATE AGENCE SET ' +
                'AGC_VALIDE = ' + 0 +
                ' WHERE AGC_IDTAGC = ?', req.params.id,
                function (error, results, fields) {
                    if (error) throw error;
                    res.json({
                        message: 'Agence archivé'
                    });
                });
        });
}