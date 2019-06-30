module.exports = function (app) {
  var jwt = require("jsonwebtoken"),
    config = require("../config/config");
  //redirect my request in my controllers
  var VideoController = require("../controllers/VideoController");
  var UserController = require("../controllers/UserController");
  var CommentController = require("../controllers/CommentController");
  var CategoryController = require("../controllers/CategoryController");
  var AuthController = require("../controllers/AuthController");
  var FollowController = require('../controllers/FollowController');

  const checkToken = (req, res, next) => {
    console.log(req.headers);
    const header = req.headers['authorization'];
    if (typeof header !== 'undefined') {
      const bearer = header.split(' ');
      const token = bearer[1];
      jwt.verify(token, config.token_secret, function (err, decoded) {
        if (err) res.sendStatus(403);
        else {
          req.decodedID = decoded.id;
          req.decodedRole = decoded.role
          next();
        }
      });
    } else {
      //If header is undefined return Forbidden (403)
      res.sendStatus(403)
    }
  }

  //CRUD for videos
  app.route("/videos")
    .get(VideoController.getVideos);
  app.route("/VideosCatego")
    .post(VideoController.getVideosCatego);
  app.route("/getVideo")
    .post(VideoController.getVideo);
  app.route("/postVideo")
    .post(VideoController.postVideo);
  app.route("/putVideo")
    .put(VideoController.putVideo);
  app.route("/deleteVideo")
    .delete(VideoController.deleteVideo);

  //-------------------------------------------//

  //CRUD for users
  app.route("/users")
    .get(UserController.getUsers);
  app.route("/getUser")
    .get(UserController.getUser);
  app.route("/putUser")
    .put(UserController.putUser);
  app.route("/deleteUser")
    .delete(UserController.deleteUser);

  //-------------------------------------------//

  //CRUD for comments
  app.route("/postComment")
    .post(CommentController.postComment);
  app.route("/putComment")
    .put(CommentController.putComment);
  app.route("/deleteComment")
    .delete(CommentController.deleteComment);

  //-------------------------------------------//

  //CRUD for categories
  app.route("/categories")
    .get(CategoryController.getCategories);
  app.route('/postCategory')
    .post(CategoryController.postCategory);
  app.route('/putCategory')
    .put(CategoryController.putCategory);
  app.route('/deleteCategory')
    .delete(CategoryController.deleteCategory);

  //CRD for follow
  app.route("/follow")
    .get(checkToken, FollowController.getFollows);
  app.route("/followMenu")
    .get(checkToken, FollowController.getFollowsMenu);

  //-------------------------------------------//


  //Login check
  app.route("/login")
    .post(AuthController.authenticate);

  //Register
  app.route("/register")
    .post(AuthController.register);

};

