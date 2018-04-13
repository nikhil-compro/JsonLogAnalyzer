var mongoose = require('mongoose');
var config = require('config');
require("../models/LogData");
require("../models/PropertyName");
//...
var dbConfig = config.get('DB');

class MongoDB{
    constructor(){
        
    }
}
MongoDB.Connect = function(){
    mongoose.connect('mongodb://'+ dbConfig.host +"/" + dbConfig.dbName, function(err){
        if (err) throw err;
        console.log ('Successfully connected to MongoDB');
    });
}
module.exports = MongoDB;
