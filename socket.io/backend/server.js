const app = require('express')();
const cors = require('cors');
const server = require('http').createServer(app);

const io = require('socket.io')(server,{
  cors:{
    origin:"*"
  }
})
    

  

  
io.on('connection' , (socket)=>{
          console.log('what is socket :' ,socket);
          console.log('socket is active to be connected')

          socket.on("chat",(payload)=>{
            console.log("what is payload",payload)
            io.emit("chat",payload)
          })
})




server.listen(5000,()=>{
    console.log('server is listening at port 5000...')
})