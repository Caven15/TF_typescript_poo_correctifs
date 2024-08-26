"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoldeInsuffisantError = void 0;
class SoldeInsuffisantError extends Error {
    constructor(message = "Pour effectuer un retrait, le solde doit être supérieur a zéro") {
        super(message);
    }
}
exports.SoldeInsuffisantError = SoldeInsuffisantError;
