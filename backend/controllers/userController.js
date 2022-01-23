const JWT = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let url = process.env.DB_URI;
let dbname = process.env.DB_NAME
let collection = process.env.DB_COLLECTION

const verifyGeneralAndHostel = (req, res, next) => {
    console.log(req.body)
    const token = req.body.JWT;
    const type = req.body.type

    const decode = JWT.decode(token);
    console.log(decode);
    const enroll = decode.enroll;

    if (decode.type !== type) {
        res.json({
            verified: 0,
            message: `The scanned QR is for ${decode.type}`
        })
        res.end();
    } else {
        MongoClient.connect(url, (err, db) => {
            if (err) throw err;
            let DB = db.db(dbname);
            DB.collection(collection).find({enroll: enroll}).toArray((err, result) => {
                if (err) throw err;
                if (result.length === 0) {
                    res.json({
                        verified: 0,
                        message: "User not found with provided QR."
                    })
                    res.end();
                } else {
                    res.json({
                        verified: 1,
                        user: {
                            name: result[0].name,
                            image: result[0].image,
                            enroll: enroll
                        }
                    })
                    res.end();
                }
            })
        })
    }
}

const verifyMess = (req, res, next) => {
    const token = req.body.JWT;
    const type = req.body.type;
    
    // sessions be - dinner, lunch, breakfast
    const session = req.body.session;

    const decode = JWT.decode(token);
    const enroll = decode.enroll;

    if (decode.type !== type) {
        res.json({
            verified: 0,
            message: `The scanned QR is for ${decode.type}`
        })
        res.end();
    } else {
        MongoClient.connect(url, (err, db) => {
            if (err) throw err;
            let DB = db.db('Goggs');
            DB.collection("Users").find({enroll: enroll}).toArray((err, result) => {
                if (err) throw err;
                if (result.length === 0) {
                    res.json({
                        verified: 0,
                        message: "User not found with provided QR."
                    })
                    res.end();
                } else {
                    if (session === 'breakfast') {
                        if (result[0].hostel.mess.current[0] === true) {
                            res.json({
                                verified: 0,
                                message: 'User already taken breakfast.'
                            })
                            res.end();
                        } else {
                            res.json({
                                verified: 1,
                                user: {
                                    name: result[0].name,
                                    image: result[0].image,
                                    enroll: enroll
                                }
                            })
                            res.end();
                        }
                    } else if (session === 'lunch') {
                        if (result[0].hostel.mess.current[1] === true) {
                            res.json({
                                verified: 0,
                                message: 'User already taken lunch.'
                            })
                            res.end();
                        } else {
                            res.json({
                                verified: 1,
                                user: {
                                    name: result[0].name,
                                    image: result[0].image,
                                    enroll: enroll
                                }
                            })
                            res.end();
                        }
                    } else {
                        if (result[0].hostel.mess.current[2] === true) {
                            res.json({
                                verified: 0,
                                message: 'User already taken dinner.'
                            })
                            res.end();
                        } else {
                            res.json({
                                verified: 1,
                                user: {
                                    name: result[0].name,
                                    image: result[0].image,
                                    enroll: enroll
                                }
                            })
                            res.end();
                        }
                    }
                }
            })
        })
    }
}

module.exports = {verifyGeneralAndHostel, verifyMess};
