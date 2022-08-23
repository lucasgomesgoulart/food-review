import express from 'express'
import User from '../models/user.js';
import bcrypt from 'bcrypt';
import Jwt  from 'jsonwebtoken';

const login = express.Router();

login.post('/', async (req,res)=> {
    const {email,password} = req.body

    // 1° pesquisar a existencia do usuario
    const registredUser = await User.findOne({where: {email}}).catch(
        (err) => {console.log("Error: ", err);}
    )
    
    // 2° caso inexistente, informar o usuario
    if(!registredUser)
    return res
        .status(400)
        .json({message: "Email ou senha incorretos"})


    // 3° validar a senha
    if(!bcrypt.compareSync(password, registredUser.password))
    // 3.1 caso senha invalida, informar o usuario
    return res
        .status(400)
        .json({message: "Email ou senha incorretos"})
    // 3.2 caso senha correta, gerar token
    const token = Jwt.sign(
        {id: registredUser.id, email: registredUser.email},
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
    )
    // 3.3 enviar token ao usuario
    res.json({message: "Bem-vindo", token: token})
})


export default login;