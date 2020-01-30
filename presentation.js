function Menu(){
    console.log("\n** Administration Hotel **");
    console.log('1. Lister les clients');
    console.log('2. Ajouter un client');
    console.log('3. Rechercher un client par nom');
    console.log("4. Vérifier la disponibilité d'une chambre");
    console.log('99. Sortir');
}

const {Service} = require('./service.js');
const service = new Service();

// récupération du module 'readline'
const readline = require('readline');

// création d'un objet 'rl' permettant de récupérer la saisie utilisateur
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function StartMenu(){

    Menu();

    // récupération de la saisie utilisateur
    rl.question('Veuillez choisir une option dans le menu : ', function(saisie) {
        //la variable `saisie` contient la saisie effectuée
        console.log("\nVotre choix : " +saisie+"\n");
        //console.log(`Vous avez saisi : ${saisie}`);

        switch(saisie){
            case '1':
                service.listerClients()
                .then(listeClients => {
                    console.log(">>Liste des clients");
                    listeClients.forEach(cl => console.log(`${cl.nom} ${cl.prenoms}`));
                    StartMenu();
                })
                .catch(erreur => console.log(`Erreur ${erreur}`));
                break;
            
            case '2':
                console.log(">>Ajouter un client");
                rl.question('Saisir un nom : ', (saisieNom) => {
                    rl.question('Saisir des prénoms : ', (saisiePrenoms) => {
                        service.ajouterClients(saisieNom,saisiePrenoms)
                        .then(() => {
                            console.log(`nouveau client enregistré : ${saisieNom} ${saisiePrenoms}`);
                            StartMenu();
                        })
                        .catch(erreur => console.log(`Erreur ${erreur}`));
                    })
                },
                (erreur) => console.log(`Erreur ${erreur}`));
                break;

            case '3':

                console.log(">>Recherche un client par nom");
                rl.question('Saisir un nom : ', (saisieNom) => {
                    service.rechercherClientsParNom(saisieNom)
                    .then(listeClientsNom => {
                        listeClientsNom.forEach(cl => console.log(`${cl.nom} ${cl.prenoms}`));
                        StartMenu();
                    })
                    .catch(erreur => console.log(`Erreur ${erreur}`));
                },
                (erreur) => console.log(`Erreur ${erreur}`));
                break;

            case '4':
                const dateDebut="2020-03-09";
                const dateFin="2020-03-16";

                service.listerChambresDispos(dateDebut,dateFin)
                .then(listeChambres => {
                    console.log(`>>Chambres disponibles du ${dateDebut} au ${dateFin}`);
                    listeChambres.forEach(ch => console.log(`numéro : ${ch.numero}  surface : ${ch.surfaceEnM2} m2`));
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

exports.choisir=StartMenu();
