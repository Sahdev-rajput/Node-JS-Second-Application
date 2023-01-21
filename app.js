const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
})


app.post("/",function(req,res)
{
    const Clss=req.body.Class;
    const dob=req.body.DOB;
    if(Clss==6 && dob=="2023-01-11")
    {
        res.write("<h1 style='color:red'>Name : Aditya Thakur</h1>");
        res.write("<h3 style='color:green'>Class: 6</h3>");
        res.write("<h3 style='color:green'>Date of Birth: 01/11/2023</h3>");
        res.write("<h2 style='color:blue'>Marks: 20</h3>");
        res.write("<h2 style='color:blue'>Percentage of Marks Obtained : 80%</h2>");
        res.write("<h2 style='color:blue'>Rank : 1</h2>");
        res.send();
    }
    else
    {
        res.sendFile(__dirname+"/failure.html");
    }
})

app.post("/failure",function(req,res)
{
    res.redirect("/");
})




















app.listen(process.env.PORT || 3000,function()
{
    console.log("SErver is running on the port 3000")
})