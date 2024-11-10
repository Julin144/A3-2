const request = require('supertest');
const mongoose = require('mongoose');
const { app, Data } = require('./index');

describe('Testes para o serviço Horário Agendado', () => {

    afterAll(async () => {
        await mongoose.connection.close();
    });

    test('Deve criar um novo horário agendado com sucesso', async () => {
        const novoHorario = {
            cpfAgendado: 123456789,
            nomeAgendado: 'Teste',
            sobrenomeAgendado: 'Agendado',
            dataHora: '2023-12-01T10:00:00'
        };

        jest.spyOn(Data, 'create').mockResolvedValue(novoHorario);

        const response = await request(app)
            .post('/horarioagendado')
            .send(novoHorario);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(novoHorario);
    });

    test('Deve retornar todos os horários agendados', async () => {
        const horariosMock = [
            { cpfAgendado: 123, nomeAgendado: 'Nome1', sobrenomeAgendado: 'Sobrenome1', dataHora: '2023-12-01T10:00:00' },
            { cpfAgendado: 456, nomeAgendado: 'Nome2', sobrenomeAgendado: 'Sobrenome2', dataHora: '2023-12-02T11:00:00' }
        ];

        jest.spyOn(Data, 'find').mockResolvedValue(horariosMock);

        const response = await request(app).get('/horarioagendado');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(horariosMock);
    });

    test('Deve retornar um horário agendado por CPF', async () => {
        const cpfMock = 123;
        const horarioMock = [
            { cpfAgendado: cpfMock, nomeAgendado: 'Nome', sobrenomeAgendado: 'Sobrenome', dataHora: '2023-12-01T10:00:00' }
        ];

        jest.spyOn(Data, 'find').mockResolvedValue(horarioMock);

        const response = await request(app).get(`/horarioagendado/${cpfMock}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(horarioMock);
    });
});
