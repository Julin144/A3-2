const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const axios = require("axios");
const mongoose = require("mongoose")

const Credenciais = require('../Credenciais.js');

app.use(bodyParse.json());

//Model
const Paciente = mongoose.model('Paciente', {
    cpfPaciente: Number,
    nomePaciente: String,
    sobrenomePaciente: String,
    numeroCarteirinha: Number,
    senha: String,
    tipo: String,
})

app.post('/paciente', async (req, res) => {
    const { cpfPaciente, nomePaciente, sobrenomePaciente, numeroCarteirinha, senha, tipo } = req.body

    const paciente = {
        cpfPaciente,
        nomePaciente,
        sobrenomePaciente,
        numeroCarteirinha,
        senha,
        tipo,
    }
    try {
        await Paciente.create(paciente)

        await axios.post("http://localhost:10000/eventos", {
            tipo: "PacienteCriado",
            dados: {
                cpfPaciente,
                nomePaciente,
                sobrenomePaciente,
                numeroCarteirinha,
                senha,
                tipo,
            },
        });

        res.status(201).json({ message: 'Paciente inserido no sistema com sucesso!' })
    } catch (error) {

        res.status(500).json({ erro: error })
    }
});

app.get('/login', async (req, res) => {
    const { cpfPaciente, senha } = req.body

    try {
        const loger = await Paciente.findOne({
            cpfPaciente: cpfPaciente,
            senha: senha
        })

        res.status(200).send({
            tipo: loger.tipo,
            cpfPaciente: loger.cpfPaciente
        })

    } catch (error) {
        res.status(500).json({ massege: "Login ou senha incorretos" })
    }
});



app.post("/eventos", (req, res) => {
    console.log(req.body);

    res.status(200).send({ msg: "ok" });
});

mongoose
    .connect(
        `mongodb+srv://${Credenciais.DBUser}:${Credenciais.DBPassword}@projetoangelaapi.rwhx6wh.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Conectou ao banco!')
        console.log('Paciente. Porta 4000')
        app.listen(4000)
    })
    .catch((err) => console.log(err))