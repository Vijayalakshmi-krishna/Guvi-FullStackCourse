const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoClient = require('mongodb');
const url = "mongodb://localhost:27017"
const bcrypt = require('bcrypt');
const saltrounds = 10;
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//function to authenticate the user with valid JWT token
function authenticate(req, res, next) {
    let header = req.header('Authorization')

    if (header == undefined) {
        res.status(401).json({
            message: "unauthorized"
        });
    }
    else {
        //Allow users with valid token
        var decode = jwt.verify(header, 'abcghimno');        
        next();
    }

}
//New users Route
app.post("/register", function (req, res) {
    mongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        if (err) throw err;
        var db = client.db("appdb");
        var newData = {
            email: req.body.email
        }
        //generate salt
        bcrypt.genSalt(saltrounds, function (err, salt) {
            if (err) throw err;
            //encrypt the password
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                if (err) throw err;                
                newData.password = hash;
                //Insert new user into DB
                db.collection("userlogin").insertOne(newData, function (err, result) {
                    if (err) throw err;
                    client.close();
                    res.json({
                        message: "User registered"
                    })
                })
            })
        })



    })


})

//Already registered users Route
app.post("/login", function (req, res) {

    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db("appdb");
        db.collection("userlogin").findOne({ email: req.body.email }, function (err, userData) {
            if (err) throw err;

            //compare the password and generate jwt token
            bcrypt.compare(req.body.password, userData.password, function (err, result) {

                if (result) {
                    var jwtToken = jwt.sign({ id: userData.id }, 'abcghimno')
                    res.json({
                        message: "success",
                        token: jwtToken
                    })
                }
                else {
                    res.json({
                        message: "Login Failed",
                    })
                }
            })
        })
    })
})

//Logged in users Route
app.get("/dashboard", authenticate, function (req, res) {

    res.json({
        message: "protected"
    })
})

app.listen(3000, function () {
    console.log("Port is running in 3000...")
})