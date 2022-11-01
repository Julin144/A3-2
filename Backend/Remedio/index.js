const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const axios = require("axios");
const mongoose = require('mongoose');

const Credenciais = require('../Credenciais.js');

app.use(bodyParse.json())

//Model
const Remedio = mongoose.model('Remedio', {
    idReceita: String,
    nome: String,
    tipoUso: String,
    dosagem: String,
    intervaloUso: String,
    duracao: String,
})
app.post('/receita/:id/remedio', async (req, res) => {
    const { idReceita, nome, tipoUso, dosagem, intervaloUso, duracao } = req.body
    
    const remedio = {
        idReceita: req.params.id ,
        nome,
        tipoUso,
        dosagem,
        intervaloUso,
        duracao,
    } 

    try {
        await Remedio.create(remedio)

        res.status(201).send(remedio)
    } catch (error) {
        res.status(500).send({ erro: error })
    }
})

app.get('/receita/:id/remedio', async (req, res) => {
    
    const id = req.params.id

    try {
        const remedios = await Remedio.find({idReceita:id})

        await axios.post('http://localhost:10000/eventos', {
            tipo: "RemedioCriado",
            dados: {
                idReceita: req.params.id,
                nome,
                tipoUso,
                dosagem,
                intervaloUso,    
                status: "aguardando"
            }
            })

        res.status(200).send(remedios)
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
        console.log('Remdio.Porta 6000')
        app.listen(6000)
    })
    .catch((err) => console.log(err))