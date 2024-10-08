"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Epargne = void 0;
const compte_1 = require("./compte");
const SoldeInsuffisantError_1 = require("../errors/SoldeInsuffisantError");
class Epargne extends compte_1.Compte {
    constructor(numero, solde, titulaire) {
        super(numero, solde, titulaire);
    }
    get DateDernierRetrait() {
        return this._DateDernierRetrait;
    }
    Retrait(montant) {
        if (this.Solde - montant >= 0) {
            super.Retrait(montant);
            this._DateDernierRetrait = new Date();
        }
        else {
            throw new SoldeInsuffisantError_1.SoldeInsuffisantError();
        }
    }
    CalculInteret() {
        return this._Solde * Epargne._TAUX;
    }
}
exports.Epargne = Epargne;
Epargne._TAUX = 0.045;
