const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const dependentesPorPacieneteId = {};

app.use(bodyParse.json());

app.get('paciente/id:/dependente', (req, res) => {
    res.send(dependentesPorPacieneteId[req.params.id] || [])
});

app.put('paciente/id:/dependente', async (req, res) => {
    const idDependentes = uuidv4();
    const { nome, sobrenome, CPFPaciente, numeroCarteirinha } = req.body;

    dependentesPorPacieneteId =
        dependentesPorPacieneteId[req.params.id] || [];
    dependentesPorPacieneteId.push({ id: idDependentes, nome, sobrenome, CPFPaciente, numeroCarteirinha });
    dependentesPorPacieneteId[req.params.id] =
        dependentesPorPacieneteId;

    await axios.post('http://localhost:10000/eventos', {
        tipo: "ObservacaoCriada",
        dados: {
            id: idDependentes,  nome, sobrenome, CPFPaciente, numeroCarteirinha, pacienteId: req.params.id
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