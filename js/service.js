"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_promise_native_1 = __importDefault(require("request-promise-native"));
var urlClients = 'https://audrey-hotel-web-api.herokuapp.com/clients';
var urlChambres = 'https://audrey-hotel-web-api.herokuapp.com/chambres';
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.listerClients = function () {
        return request_promise_native_1.default(urlClients, { json: true });
    };
    Service.prototype.ajouterClients = function (P_nom, P_prenoms) {
        return request_promise_native_1.default.post(urlClients, { json: true, body: { nom: P_nom, prenoms: P_prenoms } });
    };
    Service.prototype.rechercherClientsParNom = function (P_nom) {
        return request_promise_native_1.default(urlClients + '?nom=' + P_nom.toUpperCase(), { json: true });
    };
    Service.prototype.listerChambresDispos = function (P_dateDebut, P_dateFin) {
        return request_promise_native_1.default(urlChambres + '?dateDebut=' + P_dateDebut + '&dateFin=' + P_dateFin, { json: true });
    };
    return Service;
}());
exports.Service = Service;
