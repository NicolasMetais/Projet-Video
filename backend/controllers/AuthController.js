//require my node modules
var bcrypt = require("bcrypt"),
    jwt = require("jsonwebtoken"),
    config = require("../config/config"), //require for my secret token
    model = require('../models/Model'); //require for my Model

//Authenticate 
exports.authenticate = function (req, res) {
    if (req.body.password_user) {
        var email = new model(req.body);
        email.table = 'users';
        email.column = ' *';
        email.where = req.body.email
        email.tableWhere = 'email';
        //i use my select with the data i want and send my object in it
        model.selectSomething(email, function (err, user) {
            console.log(user);
            if (err) res.status(400).json(err);

            if (user != null) {
                var check_pwd = bcrypt.compare(req.body.password_user, user.password_user);

                if (check_pwd) { //if my password match, i create a token
                    var token = jwt.sign({ id: user.user_id, role: user.role_id }, config.token_secret);
                    res.status(200).json({ authenticate: true, message: "sucessfully connected.", user: user, token: token });

                }
                else
                    res.status(200).json({ authenticate: false, message: "Please verify your email and password." })
            }
            else
                res.status(200).json({ authenticate: false, message: "Please verify email and password." })
        })
    }
    else
        res.status(200).json({ authenticate: false, message: "You must define your email and your password for connect to this api." });
}

//Register
exports.register = function (req, res) {
    if (req.body.password_user && req.body.email && req.body.firstname && req.body.lastname && req.body.pseudo && req.body.gender && req.body.date_of_birth) {
        var email = new model(req.body)
        email.table = 'users';
        email.column = ' *';
        email.id = req.body.email
        req.body.email
        email.tableWhere = 'email';
        model.selectSomething(email, function (err, user) { //I check if my email do exist in my database

            if (err) res.status(400).json(err);

            else if (user == '') { //if user doesn't exist i enter here

                var hash = bcrypt.hashSync(req.body.password_user, 10); //i crypt my password using my config file
                console.log(hash)
                var new_user = new model(req.body);
                new_user.password_user = hash; //i delete the native password and replace it with the crypted one
                console.log(new_user.password_user)
                new_user.table = 'users';
                req.body.role_id = 1;
                new_user.value = [null, req.body.lastname, req.body.firstname, req.body.pseudo, req.body.email, hash, req.body.role_id, req.body.date_of_birth, req.body.gender];
                model.postSomething(new_user, function (err, user) { // i send all my user data in my users table

                    if (err) res.status(400).json(err);
                    else
                        res.status(201).json({ created: true, message: "user sucessfully created", user: user })

                });
            }
            else {
                res.status(200).json({ created: false, message: "A account allready exist for this email." });
            }


        });
    }
    else {
        res.status(200).json({ created: false, message: "You must define your email and your password for create your account to this api." });
    }
}


