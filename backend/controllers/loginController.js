const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;
let url = process.env.DB_URI;
let dbname = process.env.DB_NAME
let collection = process.env.DB_COLLECTION

const loginStudent = (req, res, next) => {
  let password = req.body.password;
  MongoClient.connect(url, (err, db) => {
      if (err) throw err;
      let DB = db.db(dbname);
      DB.collection(collection).find({enroll: req.body.enroll}).toArray((err, result) => {
          if (err) throw err;
          if (result.length === 0) {
            res.json({
              loggedIn: 0,
              message: "User doesn't exists!"
            })
            res.end();
          }

          else if (password != result[0].password) {
            res.json({
              loggedIn: 0,
              message: "Wrong password!"
            })
            res.end();
          }

          else if (password == result[0].password) {
            res.json({
              loggedIn: 1,
              message: "User logged in successfully"
            })
            res.end();
          }
      })
  })
}

const loginAdmin = (req, res, next) => {
  
}

module.exports = {loginStudent}