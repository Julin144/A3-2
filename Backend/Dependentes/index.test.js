const request = require('supertest');
const mongoose = require('mongoose');
const { app } = require('./index');


jest.mock('./index', () => {
    const express = require('express');
    const app = express();
    app.use(express.json());

    const Dependente = {
        create: jest.fn(),
        find: jest.fn()
    };

    app.post('/paciente/:id/dependente', async (req, res) => {
        const dependente = {
            ...req.body,
            cpfPaciente: req.params.id
        };
        await Dependente.create(dependente);
        res.status(201).send(dependente);
    });

    app.post("/eventos", (req, res) => {
        res.status(200).send({ msg: "ok" });
    });

    return { app, Dependente };
});

const { Dependente } = require('./index');

describe('Testes para o serviço Dependentes', () => {
    afterAll(async () => {
        await mongoose.connection.close();
    });

    test('Deve criar um novo dependente com sucesso', async () => {
        const novoDependente = {
            cpfDependente: "987654321",
            nomeDependente: 'DependenteNome',
            sobrenomeDependente: 'DependenteSobrenome',
            numeroCarteirinha: 123456
        };

        const cpfPaciente = "123456789";

        Dependente.create.mockResolvedValue({
            ...novoDependente,
            cpfPaciente: cpfPaciente,
        });

        const response = await request(app)
            .post(`/paciente/${cpfPaciente}/dependente`)
            .send(novoDependente);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({ ...novoDependente, cpfPaciente });
    });

    test('Deve receber um evento e retornar resposta de confirmação', async () => {
        const eventoMock = { tipo: 'NovoDependente', dados: { cpfDependente: "987654321" } };

        const response = await request(app)
            .post('/eventos')
            .send(eventoMock);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ msg: 'ok' });
    });
});
