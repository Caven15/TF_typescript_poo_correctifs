"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argumentOutOfRangeError_1 = require("./errors/argumentOutOfRangeError");
const InvalidOperationError_1 = require("./errors/InvalidOperationError");
const courant_1 = require("./models/courant");
const epargne_1 = require("./models/epargne");
const personne_1 = require("./models/personne");
try {
    const personne = new personne_1.Personne("Doe", "John", new Date("1986-05-16"));
    const courant = new courant_1.Courant("0000-0000-0001", 500, personne, 500);
    const epargne = new epargne_1.Epargne("0000-0000-0003", 500, personne);
    // Essai de retrait avec gestion des erreurs
    try {
        courant.Retrait(-500); // Devrait lever une ArgumentOutOfRangeError
    }
    catch (error) {
        if (error instanceof argumentOutOfRangeError_1.ArgumentOutOfRangeError) {
            console.error("Erreur : Le montant de retrait doit être positif.");
        }
        else {
            console.error("Erreur inconnue lors du retrait :", error);
        }
    }
    // Essai de dépôt avec gestion des erreurs
    try {
        courant.Depot(-500); // Devrait lever une ArgumentOutOfRangeError
    }
    catch (error) {
        if (error instanceof argumentOutOfRangeError_1.ArgumentOutOfRangeError) {
            console.error("Erreur : Le montant de dépôt doit être positif.");
        }
        else {
            console.error("Erreur inconnue lors du dépôt :", error);
        }
    }
    // Essai de modification de la ligne de crédit avec gestion des erreurs
    try {
        courant.LigneDeCredit = -500; // Devrait lever une InvalidOperationError
    }
    catch (error) {
        if (error instanceof InvalidOperationError_1.InvalidOperationError) {
            console.error("Erreur : La ligne de crédit ne peut pas être négative.");
        }
        else {
            console.error("Erreur inconnue lors de la modification de la ligne de crédit :", error);
        }
    }
}
catch (error) {
    // Gestion des erreurs globales
    console.error("Erreur critique : Une exception inattendue est survenue :", error);
}
