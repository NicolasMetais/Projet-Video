//require my Model
var model = require('../models/Model');

//Update an existing comment
exports.putComment = function (req, res) {
    var comment = new model(req.body);
    comment.value = req.body.value;
    comment.column = req.body.column;
    comment.table = 'comments';
    comment.where = req.body.id;
    comment.tableWhere = 'comment_id';
    if (req.body.column === 'text_comment') {
        model.putSomething(comment, function (err, data) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(data);
            }
        })
    }
};

//Post a new comment
exports.postComment = function (req, res) {
    var comment = new model(req.body);
    comment.table = 'comments';
    comment.value = [null, req.body.text_comment, req.body.user_id, req.body.video_id, req.body.creation_date];
    model.postSomething(comment, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

//Delete an existing comment
exports.deleteComment = function (req, res) {
    var comment = new model(req.body);
    comment.table = 'comments';
    comment.where = req.body.id;
    comment.tableWhere = 'comment_id';
    model.deleteSomething(comment, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};