function Menu(){
    console.log(`\n** Administration Hotel **
1. Lister les clients
2. Ajouter un client
3. Rechercher un client par nom
4. Vérifier la disponibilité d'une chambre
99. Sortir`);
}

import {Service} from './service';
const service = new Service();

import {Client,Chambre} from './domain';
//const service = new Service();

// récupération du module 'readline'
import readline from 'readline';

// création d'un objet 'rl' permettant de récupérer la saisie utilisateur
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


export function StartMenu(){

    Menu();

    // récupération de la saisie utilisateur
    rl.question('Veuillez choisir une option dans le menu : ', function(saisie) {
        //la variable `saisie` contient la saisie effectuée
        console.log("\nVotre choix : " +saisie+"\n");
        //console.log(`Vous avez saisi : ${saisie}`);

        switch(saisie){
            
            case '1': 
                service.listerClients()
                .then((listeClients) => {
                    console.log(">>Liste des clients");
                    listeClients.forEach((cl) => console.log(`${cl.nom} ${cl.prenoms}`));
                    StartMenu();
                })
                .catch((erreur:string) => console.log(`Erreur ${erreur}`));
                break;
            
            case '2':
                console.log(">>Ajouter un client");
                rl.question('Saisir un nom : ', (saisieNom:string) => {
                    rl.question('Saisir des prénoms : ', (saisiePrenoms:string) => {
                        service.ajouterClients(saisieNom,saisiePrenoms)
                        .then(() => {
                            console.log(`nouveau client enregistré : ${saisieNom} ${saisiePrenoms}`);
                            StartMenu();
                        })
                        .catch(erreur => console.log(`Erreur ${erreur}`));
                    })
                });
                break;
        
            case '3':

                console.log(">>Recherche un client par nom");
                rl.question('Saisir un nom : ', (saisieNom:string) => {
                    service.rechercherClientsParNom(saisieNom)
                    .then((listeClientsNom) => {
                        listeClientsNom.forEach((cl) => console.log(`${cl.nom} ${cl.prenoms}`));
                        StartMenu();
                    })
                    .catch(erreur => console.log(`Erreur ${erreur}`));
                });
                break;

            case '4':
                const dateDebut="2020-03-09";
                const dateFin="2020-03-16";

                service.listerChambresDispos(dateDebut,dateFin)
                .then(listeChambres => {
                    console.log(`>>Chambres disponibles du ${dateDebut} au ${dateFin}`);
                    listeChambres.forEach((ch) => console.log(`numéro : ${ch.numero}  surface : ${ch.surfaceEnM2} m2`));
                    StartMenu();
                })
                .catch(erreur => console.log(`Erreur ${erreur}`));
                break;
            
            case '99':
                console.log("Au revoir");
                rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
                break;
            default:
                StartMenu();
                break;
        }
    });
}

//exports.choisir=StartMenu();
