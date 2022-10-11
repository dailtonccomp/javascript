const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('tbl_teste', {
    pk_usu_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    usu_nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    usu_login: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    usu_senha: {
        type: Sequelize.STRING,
        allowNull: false,
    }
    
});

//criar a tabela
//User.sync();

module.exports = User;