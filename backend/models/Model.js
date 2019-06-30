//Connect to my bdd
var sql = require('./db');

//Contructor to setup all my data
var model = function (data) {
    this.id = data.id,
        this.table = data.table,
        this.column = data.column,
        this.where = data.where,
        this.leftJoinTable = data.leftJoinTable,
        this.leftJoinOn = data.leftJoinOn,
        this.tableWhere = data.tableWhere,
        this.value = data.value,
        this.orderBy = data.orderBy,
        this.pickOrder = data.pickOrder,
        this.tableWhereAND = data.tableWhereAND,
        this.limit = data.limit;
}

//Select with the possibility of LEFT JOIN or/and WHERE
model.selectSomething = function (data, result) {
    var column = data.column,
        table = data.table,
        query = "SELECT" + column + " FROM " + table;

    if (data.leftJoinTable !== undefined) {
        var leftJoinTable = data.leftJoinTable,
            leftJoinOn = data.leftJoinOn;

        for (var i = 0; i < leftJoinTable.length; i++) {
            query = query + " LEFT JOIN " + leftJoinTable[i] + " ON " + leftJoinOn[i];
        }
    }

    if (data.tableWhere !== undefined) {
        var where = data.where;
        var tableWhere = data.tableWhere;
        if (Array.isArray(where) !== true) query = query + " WHERE " + tableWhere + " = " + sql.escape(where)
    }

    if (Array.isArray(where) === true) {
        var where = data.where,
            tableWhere = data.tableWhere
        query = query + " WHERE " + tableWhere + " IN (" + sql.escape(where) + ")"
    }

    if (data.orderBy === true) {
        var value = data.value,
            pickOrder = data.pickOrder;
        query = query + " ORDER BY " + value + pickOrder
    }

    if (data.limit !== undefined) {
        var limit = data.limit;
        query = query + " LIMIT " + limit
    }

    console.log(query);
    sql.query(query, function (err, res) {
        if (err) result(null, err);
        result(null, res);
    });
}

//Post
model.postSomething = function (data, result) {
    var table = data.table,
        value = data.value;
    query = "INSERT INTO " + table + " VALUES (?)";

    sql.query(query, [value], function (err, res) {
        if (err) result(null, err);
        result(null, res);
    });
}

//Update with WHERE possiblity
model.putSomething = function (data, result) {
    var table = data.table,
        column = data.column,
        value = data.value;
    query = "UPDATE " + table + " SET " + sql.escapeId(column) + '=' + sql.escape(value);
    if (data.where !== undefined) {
        var where = data.id;
        var tableWhere = data.tableWhere;
        query = query + " WHERE " + tableWhere + " = " + sql.escape(where)

    }

    console.log(query);
    sql.query(query, function (err, res) {
        console.log(res);
        if (err) result(null, err);
        result(null, res);
    });
}

//delete with WHERE possibility
model.deleteSomething = function (data, result) {
    console.log(data);
    var table = data.table,
        query = "DELETE FROM " + table;
    if (data.where !== undefined) {
        var where = data.id;
        var tableWhere = data.tableWhere;
        query = query + " WHERE " + tableWhere + " = " + sql.escape(where)

    }

    console.log(query);
    sql.query(query, function (err, res) {
        console.log(res);
        if (err) result(null, err);
        result(null, res);
    });
}



module.exports = model;