const express=require('express');
const bodyParser=require('body-parser')
const cors=require('cors');
const app=express();
app.use(cors());
var myData=[];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.get('/',function (req,res){
res.json(myData)
});

app.post("/users",function(req,res){
    console.log(req.body);
    myData.push(req.body);
    res.json({message:"Request post received"});
})

// app.put("/users/:id",function(req,res){

// console.log(req.params.id);
// console.log(req.body);
// myData.push(req.body);
// res.json({message:"Request updated"});
// })
// app.delete("/users/:id",function(req,res){
//     res.json({message:"Deleted"})
// })
app.listen(3000,function (){
    console.log("Port is running in 3000...")
});