"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentOutOfRangeError = void 0;
class ArgumentOutOfRangeError extends Error {
    constructor(message = "Le montant du dépôt / retrait est inérieur ou égale a zéro") {
        super(message);
        this.name = "ArgumentOutOfRangeError";
    }
}
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
