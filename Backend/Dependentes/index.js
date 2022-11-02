const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const axios = require('axios');

const pacientes = {}
let contador = 0

app.use(bodyParse.json());

app.get('paciente/:id', (req, res) => {
    res.send(dependentesPorPacieneteId[req.params.id] || [])
});

app.put('paciente', async (req, res) => {
    
    contador++

    const { nome, sobrenome, CPFPaciente, numeroCarteirinha } = req.body;

    pacientes[contador] = {
        nome, sobrenome, CPFPaciente, numeroCarteirinha
    }
    await axios.post('http://localhost:10000/eventos', {
        tipo: "ObservacaoCriada",
        dados: {
            nome,
            sobrenome,
            CPFPaciente, 
            numeroCarteirinha, 
            pacienteId: req.params.id
        }
    })

    res.status(201).send(dependentesPorPacieneteId);
});

app.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});

app.listen(5000, () => {
    console.log('Dependente. Porta 5000')
});