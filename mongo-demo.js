var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var idx = 0;

MongoClient.connect(url, function(err, db) {

    var dbo = db.db("skyteam");
    var cursor = dbo.collection('customers').find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });
}); 