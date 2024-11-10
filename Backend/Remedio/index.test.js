const { app, Remedio } = require('../Remedio/index');
const request = require('supertest');
const axios = require('axios');
const mongoose = require('mongoose');


jest.mock("axios");

describe('API Remedios', () => {
    beforeAll(async () => {
        const { MongoMemoryServer } = require('mongodb-memory-server');
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });

    it('Deve criar um novo remedio', async () => {
        const remedio = {
            nome: "Paracetamol",
            tipoUso: "Oral",
            dosagem: "500mg",
            intervaloUso: "8h",
            duracao: "5 dias",
        };

        const res = await request(app)
            .post('/receita/1/remedio')
            .send(remedio);

        expect(res.status).toBe(201);
        expect(res.body.nome).toBe(remedio.nome);
        expect(res.body.tipoUso).toBe(remedio.tipoUso);
        expect(res.body.dosagem).toBe(remedio.dosagem);
        expect(res.body.intervaloUso).toBe(remedio.intervaloUso);
        expect(res.body.duracao).toBe(remedio.duracao);
    });

    it('Deve retornar todos os remedios de uma receita', async () => {
        axios.post.mockResolvedValue({ data: { msg: "ok" } });
    
        await Remedio.create({
            idReceita: '1',
            nome: "Paracetamol",
            tipoUso: "Oral",
            dosagem: "500mg",
            intervaloUso: "8h",
            duracao: "5 dias",
        });
    
        const res = await request(app).get('/receita/1/remedio');
    
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
