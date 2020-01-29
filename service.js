var menu = require('./presentation.js');
var request = require('request');

function listerClients(callback,callbackEr){

    request('https://audrey-hotel-web-api.herokuapp.com/clients', { json: true }, function(err,
    res, body) {
        if (err) { callbackEr(err); }
        // body contient les données récupérées
        callback(body);
    });
    
}

function ajouterClients(P_nom,P_prenoms,callback,callbackEr){
    request.post('https://audrey-hotel-web-api.herokuapp.com/clients', { json: true, body:{nom:P_nom,prenoms:P_prenoms} }, function(err,
    res, body) {
        if (err) { callbackEr(err); 
        }else{
            // body contient les données récupérées
            callback(body);
        }
    });
}

function rechercherClientsParNom(P_nom,callback,callbackEr){
    var param = "?nom="+P_nom.toUpperCase();
    request('https://audrey-hotel-web-api.herokuapp.com/clients'+param, { json: true }, function(err,
    res, body) {
        if (err) { callbackEr(err); }
        // body contient les données récupérées
        callback(body);
    });
}


function listerChambresDispos(P_dateDebut,P_dateFin,callback,callbackEr){
    var param = "?dateDebut="+P_dateDebut+"&dateFin="+P_dateFin;
    request('https://audrey-hotel-web-api.herokuapp.com/chambres'+param, { json: true }, function(err,
    res, body) {
        if (err) { callbackEr(err); }
        // body contient les données récupérées
        callback(body);
    });
}


exports.listerClients = listerClients;
exports.ajouterClients = ajouterClients;
exports.rechercherClientsParNom = rechercherClientsParNom;
exports.listerChambresDispos = listerChambresDispos;