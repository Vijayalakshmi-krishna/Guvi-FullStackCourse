const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoClient = require('mongodb');
const url = "mongodb://localhost:27017";

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', function (req, res) {
    console.log(req.body);
    mongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        if (err) throw err;
        var db = client.db("catalogdb");
        var productData = db.collection("products").find().toArray();
        productData.then(function (data) {
            console.log(data);
            console.log("product details displayed");
            client.close();
            res.json(data);
        })
            .catch(function (err) {
                client.close();
                res.json({
                    message: "Error in display"
                })
            })
    });

});

app.post('/create', function (req, res) {

    console.log(req.body);
    mongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        if (err) throw err;
        var db = client.db("catalogdb");
        db.collection("products").insertOne((req.body), function (err, result) {
            if (err) throw err;
            console.log("Product created in DB");
            client.close();
            res.send({
                message: 'product created'
            });
        });
    });

});

app.put('/edit/:id',function(req,res){
  
console.log(req.params.id);
console.log(req.body);
mongoClient.connect(url,{useUnifiedTopology:true},function(err,client){
    if(err) throw err;
    var db=client.db("catalogdb");    
    //var ObjectId = require('mongodb').ObjectID;
    db.collection("products").updateOne({prodId: req.params.id},
    {$set:{price:req.body.price,quantity:req.body.quantity}},function(err,result){
        if(err) throw err;
        console.log("updated to db");
       
        client.close();
        res.json({
            message:"Updated to DB"
        })
    });
   
});
});
app.delete('/delete/:id',function(req,res){
    console.log(req.params.id);
    console.log(req.body);
    mongoClient.connect(url,{useUnifiedTopology:true},function(err,client){
        if(err) throw err;
        var db=client.db("catalogdb");
        db.collection("products").deleteOne({prodId: req.params.id},function(err,result){
            if(err) throw err;
            console.log("deleted in DB");
            client.close();
            res.json({
                message:"deleted in DB"
            })
        });
    });
});

app.delete('/delbycategory/:id',function(req,res){
    console.log(req.params.id);
    console.log(req.body);
    mongoClient.connect(url,{useUnifiedTopology:true},function(err,client){
        if(err) throw err;
        var db=client.db("catalogdb");
        db.collection("products").deleteMany({category: req.params.id},function(err,result){
            if(err) throw err;
            console.log("deleted in DB");
            client.close();
            res.json({
                message:"deleted in DB"
            })
        });
    });
});

app.listen(3000, function () {

    console.log("port is running at 3000...");
});
