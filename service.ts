
import request from 'request-promise-native';
const urlClients = 'https://audrey-hotel-web-api.herokuapp.com/clients';
const urlChambres = 'https://audrey-hotel-web-api.herokuapp.com/chambres';

import {Client,Chambre,ClientCls} from './domain';

export class Service{

    listerClients():Promise<ClientCls[]>{
        return request(urlClients, { json: true });
    }

    ajouterClients(P_nom:string,P_prenoms:string){
        return request.post(urlClients, { json: true, body:{nom:P_nom,prenoms:P_prenoms} });
    }
    
    rechercherClientsParNom(P_nom:string):Promise<Client[]>{
        return request(urlClients+'?nom='+P_nom.toUpperCase(), { json: true });
    }
    
    listerChambresDispos(P_dateDebut:string,P_dateFin:string):Promise<Chambre[]>{
        return request(urlChambres+'?dateDebut='+P_dateDebut+'&dateFin='+P_dateFin, { json: true });
    }
}