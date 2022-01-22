const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;
let url = process.env.DB_URI;
let dbname = process.env.DB_NAME
let collection = process.env.DB_COLLECTION

const generalJWT = (req, res, next) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        let DB = db.db(dbname);
        DB.collection(collection).find({enroll: req.body.enroll}).toArray((err, result) => {
            if (err) throw err;
            res.json(result[0].generalJWT);
        })
    })
}

const hostelJWT = (req, res, next) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        let DB = db.db(dbname);
        DB.collection(collection).find({enroll: req.body.enroll}).toArray((err, result) => {
            if (err) throw err;
            res.json(result[0].hostel.hostelJWT)
        })
    })
}

const messJWT = (req, res, next) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        let DB = db.db(dbname);
        DB.collection(collection).find({enroll: req.body.enroll}).toArray((err, result) => {
            if (err) throw err;
            res.json(result[0].hostel.mess.messJWT)
        })
    })
}

module.exports = {generalJWT, hostelJWT, messJWT}