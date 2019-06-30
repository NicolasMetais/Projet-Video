var model = require('../models/Model');

//Get user my follows
exports.getFollows = function (req, res) {
    var follow = new model(req.body);
    follow.table = 'subscribe';
    follow.column = ' *';
    follow.where = req.decodedID
    follow.tableWhere = 'user_id'
    model.selectSomething(follow, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            follow.where = [];
            for (let i = 0; i < data.length; i++) {
                follow.where.push(data[i].follow_id);
            }
            follow.table = 'videos';
            follow.column = [' videos.video_id', 'videos.title', 'videos.view', 'videos.resume_video', 'videos.creation_date', 'videos.img', 'videos.user_id', 'videos.category_id', 'users.pseudo', 'users.profilPic'];
            follow.leftJoinTable = ['users'];
            follow.leftJoinOn = ['videos.user_id = users.user_id'];
            follow.value = 'creation_date';
            follow.pickOrder = ' DESC';
            follow.tableWhere = 'videos.user_id'
            follow.orderBy = true;
            model.selectSomething(follow, function (err, resp) {
                if (err) {
                    res.send(err);
                }
                else {
                    console.log(resp);
                    res.json(resp);
                }
            })
        }
    })
};

var model = require('../models/Model');

//Get user my follows
exports.getFollowsMenu = function (req, res) {
    var follow = new model(req.body);
    follow.table = 'subscribe';
    follow.column = ' *';
    follow.where = req.decodedID
    follow.tableWhere = 'user_id'
    model.selectSomething(follow, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            follow.where = [];
            for (let i = 0; i < data.length; i++) {
                follow.where.push(data[i].follow_id);
            }
            follow.table = 'videos';
            follow.column = [' videos.video_id', 'videos.title', 'videos.creation_date', 'videos.user_id', 'users.profilPic'];
            follow.leftJoinTable = ['users'];
            follow.leftJoinOn = ['videos.user_id = users.user_id'];
            follow.value = 'creation_date';
            follow.pickOrder = ' DESC';
            follow.tableWhere = 'videos.user_id'
            follow.orderBy = true;
            follow.limit = 7;
            model.selectSomething(follow, function (err, resp) {
                if (err) {
                    res.send(err);
                }
                else {
                    console.log(resp);
                    res.json(resp);
                }
            })
        }
    })
};  