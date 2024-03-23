// const express = require("express");
// const port=3000;
// const app=express();
// app.get('/',(req,res)=>{
//     res.send("WElCOME to WEBPAGE!...");
    
// })
// app.listen(port,()=>{
//     console.log("Server running on port "+port);
// })
const express = require("express");
const path = require("path");

const port = 3000;
const app = express();

// Serve static files from the directory containing index.html
const publicPath = path.join(__dirname, "FAKE cart");
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, "1a.html"));
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});