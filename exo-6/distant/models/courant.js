"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courant = void 0;
const compte_1 = require("./compte");
const InvalidOperationError_1 = require("../errors/InvalidOperationError");
const SoldeInsuffisantError_1 = require("../errors/SoldeInsuffisantError");
class Courant extends compte_1.Compte {
    constructor(numero, solde, titulaire, ligneDeCredit = 0) {
        super(numero, solde, titulaire);
        if (ligneDeCredit < 0) {
            throw new InvalidOperationError_1.InvalidOperationError();
        }
        this._LigneDeCredit = ligneDeCredit;
    }
    get LigneDeCredit() {
        return this._LigneDeCredit;
    }
    set LigneDeCredit(ligneDeCredit) {
        if (ligneDeCredit < 0) {
            throw new InvalidOperationError_1.InvalidOperationError();
        }
        this._LigneDeCredit = ligneDeCredit;
    }
    Retrait(montant) {
        if (this.Solde - montant >= this._LigneDeCredit) {
            super.Retrait(montant);
        }
        else {
            throw new SoldeInsuffisantError_1.SoldeInsuffisantError();
        }
    }
    CalculInteret() {
        let interet;
        if (this.Solde >= 0) {
            interet = this._Solde * Courant._TAUXPOSTIF;
        }
        else {
            interet = this._Solde * Courant._TAUXNEGATIF;
        }
        return interet;
    }
}
exports.Courant = Courant;
Courant._TAUXPOSTIF = 0.03;
Courant._TAUXNEGATIF = 0.0975;
