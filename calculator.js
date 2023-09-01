const express=require('express')
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendfile(__dirname+"/index.html");
})
app.post("/",function(req,res){
    var n1= Number(req.body.num1);
    var n2= Number(req.body.num2);
    result=n1+n2;
    
    res.send("result of calculation is"+result)
});



app.listen(3000,function(){
    console.log("SERVER CHALU HOGAYA");
})