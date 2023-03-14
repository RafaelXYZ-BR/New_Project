// Define que estamos usando o sequelize

const Sequelize = require('sequelize');

// Obtem dados de conexão entre o sequelize e o banco de dados MySQL 

const sequelize = require('../database/database.js');

//Cria uma tabela no banco de dados e seus campos 

const Game_Record_Library = sequelize.define("Game_Record_Library",{
id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
},
Name: {
    allowNull: false,
    type: Sequelize.STRING(150),
    validate: {
        len:[3, 150]
    }
},
Type: {
    allowNull: false,
    type: Sequelize.STRING(100),
    validate:{
        len:[3, 100]
    }
},
Platform: {
    allowNull: false,
    type: Sequelize.STRING(100),
    validate:{
        len:[3, 100]
    }
},
Description: {
    allowNull: false,
    type: Sequelize.STRING(50),
    validate:{
        len:[3, 50]
    }
},
Acquisition_Date: {
    allowNull: false,
    type: Sequelize.DATE()
},
Screen_Capture: {
    allowNull: false,
    type: Sequelize.STRING(500),
    validate: {
        len: [3, 500]
    }
},
Active:{
    allowNull: false,
    type: Sequelize.BOOLEAN(),
    defaultValue: true
}

});

module.exports = Game_Record_Library;