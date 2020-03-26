const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoClient = require('mongodb');
const url = "mongodb://localhost:27017";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//using getmethod

app.get('/', function (req, res) {
    console.log(req.body);
    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db("appdb");
        var userData = db.collection("userform").find().toArray();

        userData.then(function (data) {
            console.log(data);
            console.log("Data Displayed");
            client.close();
            
            res.json(data)

        })
            .catch(function (err) {
                client.close();
                res.json({
                    message: "error"
                })
            })
    });
});


app.post("/users", function (req, res) {
    console.log(req.body);

    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db("appdb")
        db.collection("userform").insertOne((req.body), function (err, result) {
            if (err) throw err;
            console.log("Saved to DB")
            client.close();
            res.json({
                message: "Inserted"
            })

        });


    });
});

app.put("/users", function (req, res) {

    console.log(req.body);
    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db("appdb");
        db.collection("userform").updateOne(
            { name: req.body.name },
            { $set: { age: req.body.age } }, function (err, result) {
                if (err) throw err;
                console.log("updated to db");
                client.close();
                res.json({
                    message: "updated"
                })
            });

    });
});

app.delete("/users", function (req, res) {

    console.log(req.body);
    mongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db("appdb");
        db.collection("userform").deleteOne({ name: req.body.name }, function (err, result) {
            if (err) throw err;
            console.log("deleted in DB");
            client.close();
            res.json({
                message: "Deleted"
            })
        });
    });
});

app.listen(3000, function () {
    console.log("Port is running in 3000...")
});