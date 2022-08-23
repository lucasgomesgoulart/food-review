import express from "express";
import dotenv from "dotenv"
import router from "./routes/routes.js";
import bodyParser from 'body-parser'


dotenv.config({path:'./config/config.env'})
const PORT = process.env.PORT || 5000;


const server = express();
server.listen(PORT, console.log("Servidor rodando em: " + process.env.NODE_ENV + ","+ " na Porta: " + PORT));

// Routes
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());

server.use(router)



