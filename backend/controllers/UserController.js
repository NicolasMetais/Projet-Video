//Require my Model
var model = require('../models/Model');

//Get all my users with their comments and videos without password
exports.getUsers = function (req, res) {
    var user = new model(req.body);
    user.table = 'users';
    user.column = [' users.user_id', 'users.lastname', 'users.firstname', 'users.email', 'users.date_of_birth', 'users.gender', 'roles.role_txt', 'comments.text_comment', 'videos.title'];
    user.leftJoinTable = ['videos', 'comments', 'roles'];
    user.leftJoinOn = ['videos.user_id = users.user_id', 'users.user_id = comments.user_id', 'users.role_id = roles.role_id'];
    model.selectSomething(user, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

//Get an user without password
exports.getUser = function (req, res) {
    var user = new model(req.body);
    user.table = 'users';
    user.column = [' users.user_id', 'users.lastname', 'users.firstname', 'users.email', 'users.date_of_birth', 'users.gender'];
    user.where = req.body.id;
    user.tableWhere = 'user_id';
    model.selectSomething(user, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

// Update and existing User
exports.putUser = function (req, res) {
    var user = new model(req.body);
    user.value = req.body.value;
    user.column = req.body.column;
    user.table = 'users';
    user.where = req.body.id;
    user.tableWhere = 'user_id';
    if (req.body.column !== 'user_id') {
        model.putSomething(user, function (err, data) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(data);
            }
        })
    }
};

//Delete an existing user
exports.deleteUser = function (req, res) {
    var user = new model(req.body);
    user.table = 'users';
    user.where = req.body.id;
    user.tableWhere = 'user_id';
    model.deleteSomething(user, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};