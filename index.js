const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const port = 3004 || process.env.PORT; 

app.use(express.static("pages")); 

app.get("/", (req, res) => {
    console.log(__dirname);
    console.log(req.originalUrl);

    res.sendFile(path.join(__dirname + "/pages/index.html")); 
});

app.get("/archive", (req, res) => {
    res.json({msg: "Hello Welcome to archive"});
})
app.listen(port, () => 
console.log(`server started on http://localhost:${port}`)
);


