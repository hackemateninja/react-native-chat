const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 4000;

io.on("connection", socket=>{
   console.log("a user connected ");
   socket.on("chat message", msg => {
      console.log(msg);
      socket.emit("chat message", msg);
   });
});

server.listen(port, ()=> console.log("server running on port" + port));
