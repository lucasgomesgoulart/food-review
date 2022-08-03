import express from "express";
import dotenvn from "dotenv"

dotenvn.config({path:'./config/config.env'})
const PORT = process.env.PORT;


const server = express();
server.listen(PORT, console.log("Servidor rodando em: " + process.env.NODE_ENV + ","+ " na Porta: " + PORT));

server.get('/' ,(req, res) => res.send('falaMarquinhos'))
server.get('/users',(req,res)=> res.send('pagina de usuariosssss'))


// CONEXÃO COM BANCO DE DADOS
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'foodReview',
  password : 'foodReview',
  database : 'dbFoodReview'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();