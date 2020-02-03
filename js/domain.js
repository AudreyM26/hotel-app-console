"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = /** @class */ (function () {
    // private _id:string="";
    function Client(_id, _nom, _prenoms) {
        this._id = _id;
        this._nom = _nom;
        this._prenoms = _prenoms;
    }
    Client.prototype.getId = function () {
        return this._id;
    };
    Client.prototype.setId = function (newId) {
        this._id = newId;
    };
    Client.prototype.toString = function () {
        return "eeeeee ";
    };
    return Client;
}());
exports.Client = Client;
var Chambre = /** @class */ (function () {
    function Chambre() {
    }
    return Chambre;
}());
exports.Chambre = Chambre;
