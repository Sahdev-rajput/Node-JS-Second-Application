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
    if(Clss==8 && dob=="2010-09-29")
    {
        res.write("Name : Prince Sengar                                                                                                                        ");
        res.write("Class: 8                                                                                                                                    ");
        res.write("Date of Birth: 29/09/2010                                                                                                                   ");
        res.write("Marks: 9.5                                                                                                                                  ");
        res.write("Percentage of Marks Obtained : 31.6%                                                                                                        ");
        res.write("Rank : 6");
        res.send();
    }
    else if(Clss==8 && dob=="2008-10-05")
    {
        res.write("Name : Yogavansh Raj Singh                                                                                                                  ");
        res.write("Class: 8                                                                                                                                    ");
        res.write("Date of Birth: 05/10/2008                                                                                                                   ");
        res.write("Marks: 16                                                                                                                                   ");
        res.write("Percentage of Marks Obtained : 53.3%                                                                                                        ");
        res.write("Rank : 4");
        res.send();
    }
    else if(Clss==8 && dob=="2008-09-15")
    {
        res.write("Name : Divy Pratap Singh                                                                                                                \n\n");
        res.write("Class: 8                                                                                                                                  \n");
        res.write("Date of Birth: 15/09/2008                                                                                                               \n\n\n");
        res.write("Marks: 15.5                                                                                                                              \n\n\n ");
        res.write("Percentage of Marks Obtained : 51.6%                                                                                                    \n\n\n");
        res.write("Rank : 5");
        res.send();
    }
    else if(Clss==8 && dob=="2007-12-21")
    {
        res.write("Name : Santanu Singh                                                                                                                      ");
        res.write("Class: 8                                                                                                                                  ");
        res.write("Date of Birth: 21/12/2008                                                                                                                 ");
        res.write("Marks: 9.5                                                                                                                                ");
        res.write("Percentage of Marks Obtained : 31.6%                                                                                                      ");
        res.write("Rank : 6");
        res.send();
    }
    else if(Clss==8 && dob=="2005-12-30")
    {
        res.write("Name : Pushpendra Kumar                                                                                                                    ");
        res.write("Class: 8                                                                                                                                   ");
        res.write("Date of Birth: 30/12/2005                                                                                                                  ");
        res.write("Marks: 21                                                                                                                                  ");
        res.write("Percentage of Marks Obtained : 70%                                                                                                         ");
        res.write("Rank : 1");
        res.send();
    }
    else if(Clss==7 && dob=="2007-12-06")
    {
        res.write("Name : Rishabh Sengar                                                                                                                    ");
        res.write("Class: 7                                                                                                                                   ");
        res.write("Date of Birth: 06/12/2007                                                                                                                  ");
        res.write("Marks: 18.5                                                                                                                                  ");
        res.write("Percentage of Marks Obtained : 61.67%                                                                                                         ");
        res.write("Rank : 3");
        res.send();
    }
    else if(Clss==6 && dob=="2008-08-05")
    {
        res.write("Name :Aditya Thakur                                                                                                                   ");
        res.write("Class: 6                                                                                                                                   ");
        res.write("Date of Birth: 05/08/2008                                                                                                                  ");
        res.write("Marks: 19                                                                                                                                  ");
        res.write("Percentage of Marks Obtained : 63.33%                                                                                                         ");
        res.write("Rank : 2");
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
