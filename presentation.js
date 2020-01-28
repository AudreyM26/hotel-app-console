function afficherMenu(){
    console.log('** Administration Hotel **');
    console.log('1. Lister les clients');
    console.log('99. Sortir');
}

function choisirOption(){

    var service = require('./service.js');

    // récupération du module 'readline'
    var readline = require('readline');

    // création d'un objet 'rl' permettant de récupérer la saisie utilisateur
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

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
                    afficherMenu();
                    choisirOption();
                });
                break;
            default:
                console.log("Au revoir");
                break;
        }


        rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
    });
}
exports.afficher=afficherMenu();
exports.choisir=choisirOption();
