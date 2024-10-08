"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compte = void 0;
const argumentOutOfRangeError_1 = require("../errors/argumentOutOfRangeError");
class Compte {
    constructor(numero, solde, titulaire) {
        this._Solde = 0;
        this._Numero = numero;
        this._Solde = solde;
        this._Titulaire = titulaire;
    }
    // Prop's
    get Numero() {
        return this._Numero;
    }
    set Numero(numero) {
        this._Numero = numero;
    }
    get Solde() {
        return parseFloat(this._Solde.toFixed(2));
    }
    set Solde(solde) {
        this._Solde = solde;
    }
    get Titulaire() {
        return this._Titulaire;
    }
    set Titulaire(titulaire) {
        this._Titulaire = titulaire;
    }
    // Méthodes
    Retrait(montant) {
        if (montant > 0) {
            this._Solde -= montant;
        }
        else {
            throw new argumentOutOfRangeError_1.ArgumentOutOfRangeError("Vous devez avoir un montant supérieur a zéro pour effectuer un retrait");
        }
    }
    Depot(montant) {
        if (montant > 0) {
            this._Solde += montant;
        }
        else {
            throw new argumentOutOfRangeError_1.ArgumentOutOfRangeError("Vous devez avoir un montant supérieur a zéro pour effectuer un depôt");
        }
    }
    AppliquerInteret() {
        this._Solde += this.CalculInteret();
    }
}
exports.Compte = Compte;
