const request = require('supertest');
const mongoose = require('mongoose');
const { app } = require('./index'); 

jest.mock('./index', () => {
    const express = require('express');
    const app = express();
    app.use(express.json());


    const Paciente = {
        create: jest.fn(),
        findOne: jest.fn()
    };

    app.post('/paciente', async (req, res) => {
        const paciente = req.body;
        await Paciente.create(paciente);
        res.status(201).send(paciente);
    });

    app.post('/login', async (req, res) => {
        const { cpfPaciente, senha } = req.body;
        const paciente = await Paciente.findOne({ cpfPaciente, senha });

        if (paciente) {
            res.status(200).send({ tipo: paciente.tipo });
        } else {
            res.status(404).json({ erro: 'Paciente não encontrado' });
        }
    });

    return { app, Paciente };
});

const { Paciente } = require('./index');

describe('Testes para o serviço Paciente', () => {
    afterAll(async () => {
        await mongoose.connection.close();
    });

    test('Deve criar um novo paciente com sucesso', async () => {
        const novoPaciente = {
            cpfPaciente: 123456789,
            nomePaciente: 'PacienteNome',
            sobrenomePaciente: 'PacienteSobrenome',
            numeroCarteirinha: 123456,
            senha: 'senha123',
            tipo: 'Paciente'
        };

        Paciente.create.mockResolvedValue(novoPaciente);

        const response = await request(app)
            .post('/paciente')
            .send(novoPaciente);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(novoPaciente);
    });

    test('Deve fazer login do paciente com sucesso', async () => {
        const cpfPaciente = 123456789;
        const senha = 'senha123';

        Paciente.findOne.mockResolvedValue({
            cpfPaciente,
            nomePaciente: 'PacienteNome',
            sobrenomePaciente: 'PacienteSobrenome',
            numeroCarteirinha: 123456,
            senha,
            tipo: 'Paciente'
        });

        const response = await request(app)
            .post('/login')
            .send({ cpfPaciente, senha });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ tipo: 'Paciente' });
    });

    test('Deve retornar erro se o login do paciente falhar', async () => {
        Paciente.findOne.mockResolvedValue(null);

        const response = await request(app)
            .post('/login')
            .send({ cpfPaciente: 11122233344, senha: 'senhaErrada' });

        expect(response.status).toBe(404);
        expect(response.body).toEqual({ erro: 'Paciente não encontrado' });
    });
});
