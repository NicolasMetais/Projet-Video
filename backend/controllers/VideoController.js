var model = require('../models/Model');

//Get all videos with category the user pseudo
exports.getVideos = function (req, res) {
    var video = new model(req.body);
    video.table = 'videos';
    video.column = [' videos.video_id', 'videos.title', 'videos.view', 'videos.resume_video', 'videos.creation_date', 'videos.img', 'videos.link', 'videos.user_id', 'videos.category_id', 'users.pseudo', 'users.profilPic', 'categories.text_category'];
    video.leftJoinTable = ['users', 'categories'];
    video.leftJoinOn = ['videos.user_id = users.user_id', 'videos.category_id = categories.category_id'];
    console.log(video)
    model.selectSomething(video, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

//Get videos from a Category
exports.getVideosCatego = function (req, res) {
    console.log(req.body)
    var video = new model(req.body);
    video.table = 'videos';
    video.column = [' videos.video_id', 'videos.title', 'videos.view', 'videos.resume_video', 'videos.creation_date', 'videos.img', 'videos.link', 'videos.user_id', 'videos.category_id', 'users.pseudo', 'users.profilPic', 'categories.text_category'];
    video.leftJoinTable = ['users', 'categories'];
    video.leftJoinOn = ['videos.user_id = users.user_id', 'videos.category_id = categories.category_id'];
    if (req.body.pickOrder === ' DESC') {
        video.orderBy = true;
        video.value = req.body.VideoGetValue;
        video.where = undefined;
    } else {
        if (req.body.pickOrder === ' ASC') {
            video.orderBy = true;
            video.value = req.body.VideoGetValue;
            video.where = undefined;
        } else {
            video.where = req.body.VideoGetValue;
            video.tableWhere = 'videos.category_id';
        }
    }

    model.selectSomething(video, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

//Get videos from specific users 
exports.getVideo = function (req, res) {
    var video = new model(req.body);
    video.table = 'videos';
    video.column = ' *';
    video.where = req.body.id
    video.tableWhereAND = 'user_id';
    model.selectSomething(video, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

//Post a new video
exports.postVideo = function (req, res) {
    var video = new model(req.body);
    video.table = 'videos';
    video.value = [null, req.body.title, 0, req.body.resume_video, req.body.creation_date, req.body.img, req.body.link, req.body.user_id, req.body.category_id];
    model.postSomething(video, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

//Update an existing video
exports.putVideo = function (req, res) {
    var video = new model(req.body);
    video.value = req.body.value;
    video.column = req.body.column;
    video.table = 'videos';
    video.where = req.body.id
    video.tableWhere = 'video_id';
    console.log(video)
    if (req.body.column === 'title' || 'resume_video' || 'category_id' || 'img') {
        model.putSomething(video, function (err, data) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(data);
            }
        })
    }
};

//Delete an existing Video
exports.deleteVideo = function (req, res) {
    var video = new model(req.body);
    video.table = 'videos';
    video.where = req.body.id;
    video.tableWhere = 'video_id';
    model.deleteSomething(video, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};