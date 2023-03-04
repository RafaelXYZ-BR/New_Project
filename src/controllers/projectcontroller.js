// Define a utilização do model project e a dependência http-status

const Game_Record_Library = require('../models/project');
const status = require('http-status');

// Cria o método Insert, obtendo os dados da request 

exports.Insert = (req,res, next) => {
    const Name = req.body.Name;
    const Type = req.body.Type;
    const Description= req.body.Description;
    const Acquisition_Date = req.body.Acquisition_Date; 
    const Screen_Capture = req.body.Screen_Capture;

// Popula cada um dos campos do model com os campos recebidos na request

Game_Record_Library.create( { 
Name: Name,
Type: Type,
Description: Description,
Acquisition_Date: Acquisition_Date,
Screen_Capture: Screen_Capture,

})

// then = registra o que queremos que aconteça quando a Promise for resolvida

.then(Game_Record_Library => {
    if (Game_Record_Library) {
        res.status(status.OK).send(Game_Record_Library);
    } else {
        res.status(status.NOT_FOUND).send();
    }
    })

// catch = registra o que queremos que aconteça quando a Promisse falhar

.catch(error => next(error));

};