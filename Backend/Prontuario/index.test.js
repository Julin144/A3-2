const request = require('supertest');
const app = require('./index'); 

jest.mock('axios');

const mongoose = require('mongoose');

jest.mock('mongoose', () => {
    const mockCreate = jest.fn();
    const mockFind = jest.fn();
    
    return {
        model: jest.fn(() => ({
            create: mockCreate,
            find: mockFind,
        })),
        connect: jest.fn(),
    };
});

describe('API Prontuario', () => {
    const Prontuario = mongoose.model('Prontuario'); 

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Deve criar um novo prontuário', async () => {
        const prontuarioData = {
            cpfPaciente: "12345678900",
            queixaPrincipal: 'Dor de cabeça',
            histDoencaAtual: 'Início recente',
            histPatologicoProgressiva: 'Nenhum',
            histFisiologica: 'Regular',
            histfamiliar: 'Hipertensão',
            histPessoal: 'Ex-fumante',
            diagnostico: 'Enxaqueca',
            recomendaçoes: 'Tomar analgésicos',
            parecerElaboradoPor: 'Dr. Silva',
            exameFisico: 'Pressão normal',
            examePsiquico: 'Normal',
        };

        Prontuario.create.mockResolvedValue(prontuarioData);

        const res = await request(app).post('/prontuario/12345678900').send(prontuarioData);

        expect(res.status).toBe(201);
        expect(res.body).toMatchObject(prontuarioData);
    });

    it('Deve retornar todos os prontuários', async () => {
        const prontuarios = [
            {
                cpfPaciente: "12345678900",
                queixaPrincipal: 'Dor de cabeça',
                histDoencaAtual: 'Início recente',
                histPatologicoProgressiva: 'Nenhum',
                histFisiologica: 'Regular',
                histfamiliar: 'Hipertensão',
                histPessoal: 'Ex-fumante',
                diagnostico: 'Enxaqueca',
                recomendaçoes: 'Tomar analgésicos',
                parecerElaboradoPor: 'Dr. Silva',
                exameFisico: 'Pressão normal',
                examePsiquico: 'Normal',
            },
        ];

        Prontuario.find.mockResolvedValue(prontuarios);

        const res = await request(app).get('/prontuario');

        expect(res.status).toBe(200);
        expect(res.body).toEqual(prontuarios);
    });

    it('Deve retornar um prontuário específico pelo cpf', async () => {
        const prontuarioData = {
            cpfPaciente: "12345678900",
            queixaPrincipal: 'Dor de cabeça',
            histDoencaAtual: 'Início recente',
            histPatologicoProgressiva: 'Nenhum',
            histFisiologica: 'Regular',
            histfamiliar: 'Hipertensão',
            histPessoal: 'Ex-fumante',
            diagnostico: 'Enxaqueca',
            recomendaçoes: 'Tomar analgésicos',
            parecerElaboradoPor: 'Dr. Silva',
            exameFisico: 'Pressão normal',
            examePsiquico: 'Normal',
        };

        Prontuario.find.mockResolvedValue([prontuarioData]);

        const res = await request(app).get('/prontuario/12345678900');

        expect(res.status).toBe(200);
        expect(res.body).toEqual([prontuarioData]);
    });

    it('Deve retornar erro 500 se ocorrer um erro ao criar um prontuário', async () => {
        Prontuario.create.mockRejectedValue(new Error('Erro ao salvar prontuário'));

        const prontuarioData = {
            queixaPrincipal: 'Dor de cabeça',
            histDoencaAtual: 'Início recente',
            histPatologicoProgressiva: 'Nenhum',
            histFisiologica: 'Regular',
            histfamiliar: 'Hipertensão',
            histPessoal: 'Ex-fumante',
            diagnostico: 'Enxaqueca',
            recomendaçoes: 'Tomar analgésicos',
            parecerElaboradoPor: 'Dr. Silva',
            exameFisico: 'Pressão normal',
            examePsiquico: 'Normal',
        };

        const res = await request(app).post('/prontuario/12345678900').send(prontuarioData);

        expect(res.status).toBe(500);
        expect(res.body).toHaveProperty('erro');
    });
});
