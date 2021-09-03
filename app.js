var e = require("express");
var app = e();
var data= [];

app.use(e.urlencoded({extended:true}));
app.use(e.json());

app.get("/",function(req,res){
    res.write("<h1>Welcome to the home page</h1>");
})

app.get("/reg",function(req,res){
    res.sendFile(__dirname+"/st_registration.html");
})

app.get("/faculty",function(req,res){
    res.sendFile(__dirname+"/prof_registration.html");

})

app.post("/st_registration",function(req,res){
    console.log("req query body::",req.query)
    res.send("Data received for student");
})

app.post("/prof_registration",function(req,res){
    console.log("req query body::",req.query)
    res.send("Data received for Proffoser");
})

app.listen(11000)


