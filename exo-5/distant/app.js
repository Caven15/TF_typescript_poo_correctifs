"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const banque_1 = require("./models/banque");
const courant_1 = require("./models/courant");
const epargne_1 = require("./models/epargne");
const personne_1 = require("./models/personne");
const personne = new personne_1.Personne();
personne.Nom = "Doe";
personne.Prenom = "Jhon";
personne.DateNaissance = new Date("1986-05-16");
console.log("Test affichage personne :");
console.log(`Nom : ${personne.Nom}`);
console.log(`Nom : ${personne.Prenom}`);
console.log(`Nom : ${personne.DateNaissance}`);
const courant = new courant_1.Courant();
courant.Numero = "0000-0000-0001";
courant.LigneDeCredit = 500;
courant.Titulaire = personne;
courant.Depot(500);
const courant2 = new courant_1.Courant();
courant2.Numero = "0000-0000-0001";
courant2.LigneDeCredit = 500;
courant2.Solde = -500;
courant2.Titulaire = personne;
const epargne = new epargne_1.Epargne();
epargne.Numero = "0000-0000-0002";
epargne.Titulaire = personne;
epargne.Depot(500);
const banque = new banque_1.Banque();
banque.Nom = "Belfius";
banque.Ajouter(courant);
banque.Ajouter(courant2);
banque.Ajouter(epargne);
// console.log("Appication des intérêts");
// courant.AppliquerInteret() // Applique le polylorphisme
// courant2.AppliquerInteret() // Applique le polylorphisme
// epargne.AppliquerInteret() // Applique le polylorphisme
// console.log(`Pour un compte courant disposant d"un solde positif de 500 € voici le résultat après application d'intérêt : ${courant.Solde} €`);
// console.log(`Pour un compte courant disposant d"un solde négatif de 500 € voici le résultat après application d'intérêt : ${courant2.Solde} €`);
// console.log(`Pour un compte epargne disposant d"un solde positif de 500 € voici le résultat après application d'intérêt : ${epargne.Solde} €`);
const epargneClient = epargne;
// Le client effectue des opérations
console.log(`Je suis le client  qui effectue un depot de 500 € sur mon compte epargne`);
epargneClient.Depot(500);
console.log(`Je suis le client  qui effectue un retrait de 500 € sur mon compte epargne`);
epargneClient.Retrait(300);
console.log(`Le solde du compte epargne client est présent de ${epargneClient.Solde}`);
// Le banquier effectuer
const epargneBanquier = epargne;
console.log(`Je suis le banquier qui consulte les informations du client`);
// Versement du salaire
epargneBanquier.Depot(1500);
// Domiciliation pour internet
epargneBanquier.Retrait(75);
// Aplpique des intérets a une date donné exemeple => début de chaque mois
epargneBanquier.AppliquerInteret();
// Consulte les informations du titulaire
console.log(`Nom : ${epargneBanquier.Titulaire.Nom}`);
console.log(`Prenom : ${epargneBanquier.Titulaire.Prenom}`);
// le banquier regarde le solde après application des intérets
console.log(`Solde du compte du client vus par le banquier : ${epargneBanquier.Solde} €`);
