const mongoose = require('mongoose');
const Credenciais = require('../Credenciais');

const conectarDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${Credenciais.DBUser}:${Credenciais.DBPassword}@projetoangelaapi.rwhx6wh.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log('Conectou ao banco!');
    } catch (error) {
        console.log('Erro ao conectar ao banco:', error);
    }
};

module.exports = conectarDB;
