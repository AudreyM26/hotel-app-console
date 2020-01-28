var menu = require('./presentation.js');

function listerClients(callback){

    var request = require('request');

    request('https://audrey-hotel-web-api.herokuapp.com/clients', { json: true }, function(err,
    res, body) {
        if (err) { return console.log('Erreur', err); }
        // body contient les données récupérées
        callback(body);
    });
    
}

exports.listerClients = listerClients;