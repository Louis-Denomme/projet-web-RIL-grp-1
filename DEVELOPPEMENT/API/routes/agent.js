var pool = require('../bdd');

module.exports = function(app, version){
    app
    .post(version + '/connect', function (req, res) {
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
    })

    .get(version+'/agents', function(req, res){
        pool.query('SELECT * FROM AGENT WHERE AGT_VALIDE = 1 AND AGT_IDTAGC = ?',req.query.AGC_IDTAGC, function (error, results, fields) {
            if (error) throw error;
            results.forEach(line => {
                line.AGT_PWD = '***';
                line.AGT_SEL = '***';
            });
            res.json(results);
        });
    })

    .put(version+'/agents',function (req, res) {        
        var sel = randomstring.generate(6);
        
        pool.query('INSERT INTO AGENT(AGT_IDTAGT, AGT_IDTPRF, AGT_IDTAGC, AGT_IDTADR, AGT_NOM, AGT_PRENOM, AGT_TEL, AGT_MOBILE, AGT_FAX, AGT_EMAIL, AGT_LOGIN, AGT_PWD, AGT_SEL, AGT_VALIDE)' +
            'VALUES(' +
            '(SELECT MAXID FROM (SELECT MAX(AGT_IDTAGT+1) AS MAXID FROM AGENT) AS boucle), ' +
            req.query.AGT_IDTPRF + ', ' +
            req.query.AGT_IDTAGC + ', ' +
            req.query.AGT_IDTADR + ', ' +
            '\'' + req.query.AGT_NOM + '\', ' +
            '\'' + req.query.AGT_PRENOM + '\', ' +
            '\'' + req.query.AGT_TEL + '\', ' +
            '\'' + req.query.AGT_MOBILE + '\', ' +
            '\'' + req.query.AGT_FAX + '\', ' +
            '\'' + req.query.AGT_EMAIL + '\', ' +
            '\'' + req.query.AGT_LOGIN + '\', ' +
            '\'' + req.query.AGT_PWD + sel + '\', ' +
            '\'' + sel + '\', ' +
            '1 ' +
            ');', function (error, results, fields) {
                if (error) throw error;
                res.json({ message: "User créé" });
            });
    })

    .get(version+'/agent/:id', function (req, res) {
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
    .post(version+'/agent/:id', function (req, res) {
        pool.query('UPDATE AGENT SET ' +
            'AGT_IDTPRF = ' + req.query.AGT_IDTPRF + ', ' +
            'AGT_IDTAGC = ' + req.query.AGT_IDTAGC + ', ' +
            'AGT_IDTADR = ' + req.query.AGT_IDTADR + ', ' +
            'AGT_NOM = ' + req.query.AGT_NOM + ', ' +
            'AGT_PRENOM = ' + req.query.AGT_PRENOM + ', ' +
            'AGT_TEL = ' + req.query.AGT_TEL + ', ' +
            'AGT_MOBILE = ' + req.query.AGT_MOBILE + ', ' +
            'AGT_FAX = ' + req.query.AGT_FAX + ', ' +
            'AGT_EMAIL = ' + req.query.AGT_EMAIL +
            ' WHERE AGT_IDTAGT = ?', req.params.id, function (error, results, fields) {
                if (error) throw error;
                res.json({ message: 'User modifié' });
            });
    })
    //DELETE
    .delete(version+'/agent/:id', function (req, res) {
        pool.query('UPDATE AGENT SET ' +
            'AGT_VALIDE = ' + 0 +
            ' WHERE AGT_IDTAGT = ?', req.params.id, function (error, results, fields) {
                if (error) throw error;
                res.json({ message: 'User archivé' });
            });
    });
}