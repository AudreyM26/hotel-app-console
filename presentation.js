function afficherMenu(){
    console.log('** Administration Hotel **');
    console.log('1. Lister les clients');
    console.log('2. Ajouter un client');
    console.log('3. Rechercher un client par nom');
    console.log("4. Vérifier la disponibilité d'une chambre");
    console.log('99. Sortir');
}

var service = require('./service.js');

// récupération du module 'readline'
var readline = require('readline');

// création d'un objet 'rl' permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function choisirOption(){

    afficherMenu();

    // récupération de la saisie utilisateur
    rl.question('Veuillez choisir une option dans le menu : ', function(saisie) {
        //la variable `saisie` contient la saisie effectuée
        console.log("\nVotre choix : " +saisie+"\n");
        //console.log(`Vous avez saisi : ${saisie}`);

        switch(saisie){
            case '1':
                console.log(">>Liste des clients");
                service.listerClients(function(data){
                    for (let i = 0; i < data.length; i++){
                        console.log(data[i].nom+" "+data[i].prenoms);
                    }
                    console.log("\n");
                    choisirOption();
                },
                function(erreur){
                    console.log("Erreur "+erreur);
                });
                break;

            case '2':

                console.log(">>Ajouter un client");
               
                var nom ="";
                var prenoms="";
                rl.question('Saisir un nom : ', (saisieNom) => {
                    nom = saisieNom;

                    rl.question('Saisir des prénoms : ', (saisiePrenoms) => {
                        prenoms = saisiePrenoms;
                        service.ajouterClients(nom,prenoms,function(data){
                            console.log(data);
                            choisirOption();
                        });
                    })
                },
                function(erreur){
                    console.log("Erreur "+erreur);
                });
                break;

            case '3':

                console.log(">>Recherche un client par nom");
                
                rl.question('Saisir un nom : ', (saisieNom) => {
                    nom = saisieNom;
                    service.rechercherClientsParNom(nom,function(data){
                        data.forEach(function(liste) {
                            console.log(liste.nom+" "+liste.prenoms);
                        });
                        console.log("\n");
                        choisirOption();
                    });
                });
                break;

            case '4':

                console.log(">>Chambres disponibles");
                let dateDebut="2020-03-09";
                let dateFin="2020-03-16";

                service.listerChambresDispos(dateDebut,dateFin,function(chambres){
                    chambres.forEach(function(chambre){
                        console.log(`numéro : ${chambre.numero}  surface : ${chambre.surfaceEnM2}`);
                    });
                    console.log("\n");
                    choisirOption();
                },
                function(erreur){
                    console.log("Erreur "+erreur);
                });
                break;

            case '99':
                console.log("Au revoir");
                rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
                break;
            default:
                choisirOption();
                break;
        }
    });
}

exports.choisir=choisirOption();
