//require my Model
var model = require('../models/Model');

//Get my categories from my database
exports.getCategories = function (req, res) {
    console.log(req.body);
    var categories = new model(req.body);
    categories.table = 'categories';
    categories.column = ' *';
    model.selectSomething(categories, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

//Post a new category
exports.postCategory = function (req, res) {
    var category = new model(req.body);
    category.table = 'categories';
    category.value = [null, req.body.text_category];
    model.postSomething(category, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};

//Update an existing category
exports.putCategory = function (req, res) {
    var category = new model(req.body);
    category.value = req.body.value;
    category.column = req.body.column;
    category.table = 'categories';
    category.where = req.body.id;
    category.tableWhere = 'category_id';
    if (req.body.column === 'text_category') {
        model.putSomething(category, function (err, data) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(data);
            }
        })
    }
};

//Delete an existing category
exports.deleteCategory = function (req, res) {
    var category = new model(req.body);
    category.table = 'categories';
    category.where = req.body.id;
    category.tableWhere = 'category_id';
    model.deleteSomething(category, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};