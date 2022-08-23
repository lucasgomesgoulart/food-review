import express from 'express'

const review = express.Router();

review.get('/', (req,res)=> res.send("Rota de restaurantes"))



export default review;