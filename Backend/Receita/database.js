const mongoose = require('mongoose');
const Credenciais = require('../Credenciais');

const connectDB = () => {
    return mongoose.connect(
        `mongodb+srv://${Credenciais.DBUser}:${Credenciais.DBPassword}@projetoangelaapi.rwhx6wh.mongodb.net/?retryWrites=true&w=majority`
    );
};

module.exports = connectDB;
