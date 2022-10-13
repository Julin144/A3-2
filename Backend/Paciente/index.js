const express = require('express');
const app = express();
const bodyParse = require('body-parser');

const Paciente = {};
let contador = 0;

app.use(bodyParse.json());

app.get('/paciente', (req, res) => {
    res.send(Paciente)
});

app.put('/paciente', (req, res) => {
    contador++;
    const { nome, sobrenome, CPF, numeroCarteirinha, senha } = req.body;
    Paciente[contador] = {
        contador, nome, sobrenome, CPF, numeroCarteirinha, senha
    }
    res.status(201).send(Paciente[contador]);
});
app.listen(4000, () => {
    console.log('Paciente. Porta 4000')
});