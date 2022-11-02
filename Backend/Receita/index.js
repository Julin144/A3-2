const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const axios = require("axios");
const mongoose = require('mongoose');

const Credenciais = require('../Credenciais.js');

app.use(bodyParse.json())

//Model
const Receita = mongoose.model('Receita', {
    cpfPertencenteReceita: Number,
    dataValidade: String,
})

app.post('/receita', async (req, res) => {
    const { cpfPertencenteReceita, dataValidade } = req.body

    const receita = {
        cpfPertencenteReceita,
        dataValidade,
    }

    try {
        await Receita.create(receita)

        await axios.post("http://localhost:10000/eventos", {
            tipo: "ReceitaCriada",
            dados: {
                cpfPertencenteReceita,
                dataValidade,
            },
        });

        res.status(201).json({ message: 'Receita inserida no sistema com sucesso!' })
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

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
        console.log('Receita.Porta 7000')
        app.listen(7000)
    })
    .catch((err) => console.log(err))