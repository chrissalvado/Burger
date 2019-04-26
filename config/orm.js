var connection = require('../config/connection.js');

function createQmarks(num) {
    var arr = [];
    for(var i = 0; i < num; i ++){
        arr.push("?");
    }
    return arr.tostring();
}

function translateSql(obj) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)){
            if(typeof value === "string" && value.indexOf(" ") >=0){
                value = "'" + value + "'" ;

            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString
}
var orm = {
    selectAll: function(table, cb){
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function(err, res){
            if (err){
                throw err;
            }
            cb(res)
        })
    },
    insertOne: function(table, cols, vals, cb) {
        console.log(cols,"these are our columns")
        // var dbQuery =
        // "INSERT INTO " +
        // table +
        // "(" +
        // cols.tostring() +
        // "VALUES ("  +
        // createQmarks(vals.length) +
        // ")";
        var dbQuery = "INSERT INTO burgers  (burger_name, devoured, dt)  VALUES ('" + vals[0]  +"', false, CURRENT_TIMESTAMP)"

    console.log(dbQuery);
    connection.query(dbQuery, function(err, res){
        if (err){
            throw err;
        }
        cb(res);
    });

  },
  updateOne: function(table, objColVals,condition, cb){
    var dbQuery =
    "UPDATE" +
     table +
      "SET" +
       translateSql(objColVals) +
        "WHERE" + 
        condition ;
        console.log(dbQuery);
connection.query(dbQuery, function(err, res){
    if (err){
        throw err;
    }
    cb(res);
});
},
deleteone: function(table, condition, cb){
    var dbQuery= "DELETE FROM" + table + "WHERE" + condition ;
    console.log(dbQuery);
    connection.query(dbQuery, function(err, res){
        if (err){
            throw err;
        }
        cb(res);
    });
}
};
module.exports = orm