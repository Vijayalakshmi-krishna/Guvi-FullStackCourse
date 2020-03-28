const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoClient=require('mongodb');
const url="mongodb://localhost:27017"
const bcrypt=require('bcrypt');
const saltrounds=10;
const jwt=require('jsonwebtoken');
//var LocalStorage = require('node-localstorage').LocalStorage,
//localStorage = new LocalStorage('./scratch');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

function authenticate(req,res,next)
{
    let header=req.header('Authorization')
    console.log(header)
    if(header ==undefined)
    {
        res.status(401).json({
            message:"unauthorized"
        });
    }
    else{
       var decode= jwt.verify(header,'abcghimno');
       console.log(decode);
       next();
    }
    
}

app.post("/register",function(req,res){
   console.log(req.body);
    mongoClient.connect(url,{useUnifiedTopology: true},function(err,client){
        if (err) throw err;
        var db=client.db("appdb");
        var newData={
            email:req.body.email
        }

        bcrypt.genSalt(saltrounds,function(err,salt){
           if(err) throw err;
           //console.log(salt);
           bcrypt.hash(req.body.password,salt,function(err,hash){
            if(err) throw err;
            console.log(hash);
            newData.password=hash;  

            db.collection("userlogin").insertOne(newData,function(err,result){
                if(err) throw err;
                //console.log(result);
                console.log("User registered")
                client.close();
                res.json({
                    message:"User registered"
                })
            })
           })
        })

        
        
    })
    

})

app.post("/login",function(req,res){
    console.log(req.body);
    mongoClient.connect(url,function(err,client){
        if(err) throw err;
        var db=client.db("appdb");
        db.collection("userlogin").findOne({email:req.body.email},function(err,userData){
            if(err) throw err;
            console.log(userData);
            bcrypt.compare(req.body.password,userData.password,function(err,result){
            console.log(result);
            if(result)
            {
                var jwtToken=jwt.sign({id:userData.id},'abcghimno')
                console.log(jwtToken);
               // localStorage.setItem("token",jwtToken);
                res.json({message:"success",
                token:jwtToken})
            }
            else
            {
                res.json({message:"Login Failed",
               })
            }
        })
        })
    })
})


app.get("/dashboard",authenticate,function(req,res)
{
    console.log("in dashboard")
    res.json({
        message:"protected"
    })
})

app.listen(3000,function(){
    console.log("Port is running in 3000...")
})