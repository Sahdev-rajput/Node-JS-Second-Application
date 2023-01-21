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
        res.write("Name : Aditya Thakur                                                                                                                      ");
        res.write("Class: 6                                                                                                                                   ");
        res.write("Date of Birth: 01/11/2023"                                                                                                                 );
        res.write("Marks: 20                                                                                                                                 ");
        res.write("Percentage of Marks Obtained : 80%                                                                                                         ");
        res.write("Rank : 1");
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
