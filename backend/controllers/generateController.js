const MongoClient = require('mongodb').MongoClient;

let url = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const generalJWT = (req, res, next) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        let DB = db.db('Goggs');
        DB.collection("Users").find({enroll: req.body.enroll}).toArray((err, result) => {
            if (err) throw err;
            res.json(result[0].generalJWT);
        })
    })
}

const hostelJWT = (req, res, next) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        let DB = db.db('Goggs');
        DB.collection("Users").find({enroll: req.body.enroll}).toArray((err, result) => {
            if (err) throw err;
            res.json(result[0].hostel.hostelJWT)
        })
    })
}

const messJWT = (req, res, next) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        let DB = db.db('Goggs');
        DB.collection("Users").find({enroll: req.body.enroll}).toArray((err, result) => {
            if (err) throw err;
            res.json(result[0].hostel.mess.messJWT)
        })
    })
}

module.exports = {generalJWT, hostelJWT, messJWT}