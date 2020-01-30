const request = require('request-promise-native');

const urlClients = 'https://audrey-hotel-web-api.herokuapp.com/clients';
const urlChambres = 'https://audrey-hotel-web-api.herokuapp.com/chambres';

class Service{

    listerClients(){
        return request(urlClients, { json: true });
    }

    ajouterClients(P_nom,P_prenoms){
        return request.post(urlClients, { json: true, body:{nom:P_nom,prenoms:P_prenoms} });
    }
    
    rechercherClientsParNom(P_nom){
        return request(urlClients+'?nom='+P_nom.toUpperCase(), { json: true });
    }
    
    listerChambresDispos(P_dateDebut,P_dateFin){
        return request(urlChambres+'?dateDebut='+P_dateDebut+'&dateFin='+P_dateFin, { json: true });
    }
}

exports.Service = Service;