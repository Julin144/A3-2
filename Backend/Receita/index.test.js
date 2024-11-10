const request = require('supertest');
const { app, Receita } = require('./index');
const axios = require('axios');

jest.mock('axios');
jest.mock('mongoose', () => ({
    model: jest.fn(() => ({
        create: jest.fn(),
    })),
}));

describe('API Receita', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Deve criar uma nova receita', async () => {
        const receitaData = {
            cpfPertencenteReceita: 12345678900,
            dataValidade: '2024-12-31',
        };

        Receita.create.mockResolvedValue(receitaData);
        axios.post.mockResolvedValue({ data: { msg: 'ok' } });

        const res = await request(app).post('/receita').send(receitaData);

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('message', 'Receita inserida no sistema com sucesso!');

        expect(axios.post).toHaveBeenCalledWith('http://localhost:10000/eventos', {
            tipo: 'ReceitaCriada',
            dados: receitaData,
        });
    });

    it('Deve retornar erro 500 se ocorrer um erro ao criar uma receita', async () => {
        const receitaData = {
            cpfPertencenteReceita: 12345678900,
            dataValidade: '2024-12-31',
        };

        Receita.create.mockRejectedValue(new Error('Erro ao salvar receita'));

        const res = await request(app).post('/receita').send(receitaData);

        expect(res.status).toBe(500);
        expect(res.body).toHaveProperty('erro');
    });
});
