module.exports = function (app) {
  //redirect my request in my controllers
  var VideoController = require("../controllers/VideoController");
  var UserController = require("../controllers/UserController");
  var CommentController = require("../controllers/CommentController");
  var CategoryController = require("../controllers/CategoryController");
  var AuthController = require("../controllers/AuthController");

  //CRUD for videos
  app.route("/videos")
    .get(VideoController.getVideos);
  app.route("/getVideo")
    .get(VideoController.getVideo);
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

  //-------------------------------------------//

  //Login check
  app.route("/login")
    .post(AuthController.authenticate);

  //Register
  app.route("/register")
    .post(AuthController.register);
};

