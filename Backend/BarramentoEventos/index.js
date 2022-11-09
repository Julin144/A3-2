const express = require('express');
const bodyParser = require('body-parser');

const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/eventos', (req, res) => {
    const evento = req.body;
    
    //Paciente
    axios.post('http://localhost:4000/eventos', evento);

    //Dependentes
    axios.post('http://localhost:5000/eventos', evento);

    //Remedio
    axios.post('http://localhost:6000/eventos', evento);
    
    //Receita
    axios.post('http://localhost:7000/eventos', evento);
    
    //Prontuario
    axios.post('http://localhost:8000/eventos', evento);

    //HorarioAgendado
    axios.post('http://localhost:9000/eventos', evento);

    res.status(200).send({ msg: "ok" });
});

app.listen(10000, () => {
    console.log('Barramento de eventos. Porta 10000.')
})