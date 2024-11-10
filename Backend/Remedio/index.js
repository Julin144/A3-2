const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require("axios");
const mongoose = require('mongoose');

let Credenciais;

if (process.env.NODE_ENV === 'test') {
    Credenciais = {
        DBUser: 'testUser',
        DBPassword: 'testPassword'
    };
} else {
    Credenciais = require('../Remedio/Credenciais');
}

app.use(bodyParser.json());

const Remedio = mongoose.model('Remedio', {
    idReceita: String,
    nome: String,
    tipoUso: String,
    dosagem: String,
    intervaloUso: String,
    duracao: String,
});

app.post('/receita/:id/remedio', async (req, res) => {
    const { nome, tipoUso, dosagem, intervaloUso, duracao } = req.body;
    
    const remedio = {
        idReceita: req.params.id,
        nome,
        tipoUso,
        dosagem,
        intervaloUso,
        duracao,
    };

    try {
        await Remedio.create(remedio);
        res.status(201).send(remedio);
    } catch (error) {
        console.error("Erro ao criar remedio:", error);
        res.status(500).send({ erro: error.message });
    }
});

app.get('/receita/:id/remedio', async (req, res) => {
    const id = req.params.id;

    try {
        const remedios = await Remedio.find({ idReceita: id });

        await axios.post('http://localhost:10000/eventos', {
            tipo: "RemedioCriado",
            dados: {
                idReceita: req.params.id,
                status: "aguardando"
            }
        });

        res.status(200).send(remedios);
    } catch (error) {
        console.error("Erro ao buscar remedios:", error);
        res.status(500).json({ erro: error.message });
    }
});

app.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});

if (process.env.NODE_ENV !== 'test') {
    mongoose.connect(
        `mongodb+srv://${Credenciais.DBUser}:${Credenciais.DBPassword}@projetoangelaapi.rwhx6wh.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Conectou ao banco!');
        app.listen(6000, () => console.log('Remedio.Porta 6000'));
    })
    .catch((err) => console.log(err));
}

module.exports = { app, Remedio };
