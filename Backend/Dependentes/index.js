const express = require('express');
const app = express();
const bodyParse = require('body-parser');

const Dependentes = {};
let contador = 0;

app.use(bodyParse.json());

app.get('/dependente', (req, res) => {
    res.send(Dependentes)
});

app.put('/dependente', (req, res) => {
    contador++;
    const { CPFUsuario, nome, sobrenome, CPFPaciente, numeroCarteirinha } = req.body;
    Dependentes[contador] = {
        contador, CPFUsuario, nome, sobrenome, CPFPaciente, numeroCarteirinha
    }
    res.status(201).send(Dependentes[contador]);
});

app.listen(5000, () => {
    console.log('Dependente. Porta 5000')
});