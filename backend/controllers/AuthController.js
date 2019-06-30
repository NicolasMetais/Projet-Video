//require my node modules
var bcrypt = require("bcrypt"),
    jwt = require("jsonwebtoken"),
    config = require("../config/config"), //require for my secret token
    model = require('../models/Model'); //require for my Model

//Authenticate 
exports.authenticate = function (req, res) {
    console.log(req.body);
    if (req.body.password_user) {
        var email = new model(req.body);
        email.table = 'users';
        email.column = ' *';
        email.where = req.body.email
        email.tableWhere = 'email';
        //i use my select with the data i want and send my object in it
        model.selectSomething(email, function (err, user) {
            if (err) res.status(400).json(err);

            if (user != '') {
                console.log(user);
                bcrypt.compare(req.body.password_user, user[0].password_user, function (errorr, respon) {
                    if (errorr) {
                        console.log('Comparison error: ', errorr);
                    }

                    if (respon == true) { //if my password match, i create a token
                        var token = jwt.sign({ id: user[0].user_id, role: user[0].role_id }, config.token_secret);
                        console.log(token);
                        res.status(201).send(token);
                    }
                    else
                        res.status(200).json({ authenticate: false, message: "Please verify your email and password." })
                });
            }
            else
                res.status(202).json({ authenticate: false, message: "Please verify email and password." })
        })
    }
    else
        res.status(202).json({ authenticate: false, message: "You must define your email and your password for connect to this api." });
}

//Register
exports.register = function (req, res) {
    if (req.body.password_user && req.body.email && req.body.firstname && req.body.lastname && req.body.pseudo && req.body.gender && req.body.date_of_birth) {
        var email = new model(req.body)
        email.table = 'users';
        email.column = ' *';
        email.where = req.body.email
        email.tableWhere = 'email';
        model.selectSomething(email, function (err, user) { //I check if my email do exist in my database
            if (err) res.status(400).json(err);

            else if (user == '') { //if user doesn't exist i enter here

                var hash = bcrypt.hashSync(req.body.password_user, 10); //i crypt my password using my config file
                var new_user = new model(req.body);
                new_user.password_user = hash; //i delete the native password and replace it with the crypted one
                new_user.table = 'users';
                req.body.role_id = 1;
                new_user.value = [null, req.body.lastname, req.body.firstname, req.body.pseudo, 'Images/profil.png', req.body.email, hash, req.body.role_id, req.body.date_of_birth, req.body.gender];
                model.postSomething(new_user, function (err, check) { // i send all my user data in my users table
                    if (err) res.status(400).json(err);
                    else {
                        model.selectSomething(email, function (err, userfind) {


                            var new_follow = new model(req.body);
                            console.log(userfind)
                            new_follow.table = 'follow';
                            new_follow.value = userfind[0].user_id
                            model.postSomething(new_follow, function (err, follow) {
                                res.status(201).json({ created: true, message: "user sucessfully created", check: check })
                            })

                        });
                    }
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


