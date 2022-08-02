import express from "express";

const server = express();
server.listen(3000, console.log("servidor rodando"));

server.get('/' ,(req, res) => res.send('falaMarquinhos'))
server.get('/users',(req,res)=> res.send('pagina de usuarios'))