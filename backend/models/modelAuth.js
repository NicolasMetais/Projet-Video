var sql = require('./db');

var model = function (data) {
    this.lastname = data.lastname,
        this.firstname = data.firstname,
        this.pseudo = data.pseudo,
        this.email = data.email,
        this.password_user = data.password_user,
        this.role_id = 1,
        this.date_of_birth = data.date,
        this.gender = data.gender
}

model.emailcheck = function (checkemail, result) {
    var query = "SELECT * FROM users WHERE email = ?";

    sql.query(query, checkemail, function (err, res) {
        if (err) result(null, err);
        result(null, res);
    });
}

model.registerModel = function (newUser, result) {
    console.log(newUser);
    var newUserInsert = Object.values(newUser);
    /*     console.log(newUserInsert); */
    var table = [
        []
    ];
    for (var i = 0; i < newUserInsert.length; i++) {
        table[0].push(newUserInsert[i])
    }
    /*     console.log(table); */

    var query = "INSERT INTO users (lastname, firstname, pseudo, email, password_user, role_id, date_of_birth, gender) VALUES ?";

    sql.query(query, [table], function (err, res) {
        if (err) throw err;
        result(null, res);
    });

}

module.exports = model;