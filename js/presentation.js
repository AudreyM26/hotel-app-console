"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function Menu() {
    console.log("\n** Administration Hotel **\n1. Lister les clients\n2. Ajouter un client\n3. Rechercher un client par nom\n4. V\u00E9rifier la disponibilit\u00E9 d'une chambre\n99. Sortir");
}
var service_1 = require("./service");
var service = new service_1.Service();
//const service = new Service();
// récupération du module 'readline'
var readline_1 = __importDefault(require("readline"));
// création d'un objet 'rl' permettant de récupérer la saisie utilisateur
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
function StartMenu() {
    Menu();
    // récupération de la saisie utilisateur
    rl.question('Veuillez choisir une option dans le menu : ', function (saisie) {
        //la variable `saisie` contient la saisie effectuée
        console.log("\nVotre choix : " + saisie + "\n");
        //console.log(`Vous avez saisi : ${saisie}`);
        switch (saisie) {
            case '1':
                service.listerClients()
                    .then(function (listeClients) {
                    console.log(">>Liste des clients");
                    listeClients.forEach(function (cl) { return console.log("" + cl.toString()); });
                    StartMenu();
                })
                    .catch(function (erreur) { return console.log("Erreur " + erreur); });
                break;
            case '2':
                console.log(">>Ajouter un client");
                rl.question('Saisir un nom : ', function (saisieNom) {
                    rl.question('Saisir des prénoms : ', function (saisiePrenoms) {
                        service.ajouterClients(saisieNom, saisiePrenoms)
                            .then(function () {
                            console.log("nouveau client enregistr\u00E9 : " + saisieNom + " " + saisiePrenoms);
                            StartMenu();
                        })
                            .catch(function (erreur) { return console.log("Erreur " + erreur); });
                    });
                });
                break;
            case '3':
                console.log(">>Recherche un client par nom");
                rl.question('Saisir un nom : ', function (saisieNom) {
                    service.rechercherClientsParNom(saisieNom)
                        .then(function (listeClientsNom) {
                        listeClientsNom.forEach(function (cl) { return console.log(cl.nom + " " + cl.prenoms); });
                        StartMenu();
                    })
                        .catch(function (erreur) { return console.log("Erreur " + erreur); });
                });
                break;
            case '4':
                var dateDebut_1 = "2020-03-09";
                var dateFin_1 = "2020-03-16";
                service.listerChambresDispos(dateDebut_1, dateFin_1)
                    .then(function (listeChambres) {
                    console.log(">>Chambres disponibles du " + dateDebut_1 + " au " + dateFin_1);
                    listeChambres.forEach(function (ch) { return console.log("num\u00E9ro : " + ch.numero + "  surface : " + ch.surfaceEnM2 + " m2"); });
                    StartMenu();
                })
                    .catch(function (erreur) { return console.log("Erreur " + erreur); });
                break;
            case '99':
                console.log("Au revoir");
                rl.close(); // attention, une fois l'interface fermée, la saisie n'est plus possible
                break;
            default:
                StartMenu();
                break;
        }
    });
}
exports.StartMenu = StartMenu;
//exports.choisir=StartMenu();
