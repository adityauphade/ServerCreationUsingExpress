var express = require("express");
var app = express();
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/BhayaDB', (err) => {
    if(err){console.error(err)}
    else{console.log("Connection with BhayaDB is successful")}
});

app.listen("3000", () => {
    console.log("Hellaaa")
})

const EmpList ={
    "emp" : [
        {
            "id": 1,
            "name": "Aditya"
        },
        {
            "id": 2,
            "name": "DK"
        },
        {
            "id": 3,
            "name": "Niraj"
        },
    ]
}

//server doing this when client sends a get req with / as url
app.get("/", (request, response) => {
    response.json(hella)
})

//server doing this when client sends a get req with /"id number" as url; 
//client would be passing id number
//id is already an attribute 
app.get("/:id", (request, response) => {
    response.send("insert ID" + request.params.id)
})

//what server sends when client asks for the name attribute specifically
app.get("/name", (request, response) => {
    //if(condition - (eg)checking if the client is verified)
    response.send("Successful")
    //else
    response.status(404).send("Unsuccessful")
})

//when the client is asking for posting something; this is what server will do
app.post("/id", (req, res) => {
    res.send("This is a post request")
})