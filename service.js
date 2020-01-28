var menu = require('./presentation.js');
var request = require('request');

function listerClients(callback){

    request('https://audrey-hotel-web-api.herokuapp.com/clients', { json: true }, function(err,
    res, body) {
        if (err) { return console.log('Erreur', err); }
        // body contient les données récupérées
        callback(body);
    });
    
}

function ajouterClients(P_nom,P_prenoms,callback){
    request.post('https://audrey-hotel-web-api.herokuapp.com/clients', { json: true, body:{nom:P_nom,prenoms:P_prenoms} }, function(err,
    res, body) {
        if (err) { return console.log('Erreur', err); }
        // body contient les données récupérées
        callback(body);
    });
}

function rechercherClientsParNom(P_nom,callback){
    var param = "?nom="+P_nom.toUpperCase();
    request('https://audrey-hotel-web-api.herokuapp.com/clients'+param, { json: true }, function(err,
    res, body) {
        if (err) { callback(err); }
        // body contient les données récupérées
        callback(body);
    });
}


exports.listerClients = listerClients;
exports.ajouterClients = ajouterClients;
exports.rechercherClientsParNom = rechercherClientsParNom;