function server(PORT){
    const express = require("express");
    
    const app = express();
    
    app.get("/",(req,res)=>{
        res.send("It's working fine bro!...");
    });
    app.listen(PORT,()=>{
        console.log("Your first express server running at port: ",PORT,`\nNavigate to : http://localhost:${PORT}`);
        
    })

    // console.log("your server setup was done...");
    
}

module.exports = server;
